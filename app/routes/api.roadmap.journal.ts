import { json, type LoaderFunctionArgs, type ActionFunctionArgs } from "@remix-run/node";
import { prisma } from "~/db.server";
import { authenticateRoadmapRequest } from "~/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const auth = await authenticateRoadmapRequest(request);
    const journals = await prisma.roadmapJournal.findMany({
      where: { role: auth.role }
    });
    return json(journals);
  } catch (error) {
    if (error instanceof Response) return error;
    console.error("Error fetching journals:", error);
    return json({ error: "Failed to fetch journal entries" }, { status: 500 });
  }
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const auth = await authenticateRoadmapRequest(request);
    const { id, learned, difficulties, notes } = await request.json();

    if (!id) {
      return json({ error: "Journal ID (week reference) is required" }, { status: 400 });
    }

    const record = await prisma.roadmapJournal.upsert({
      where: {
        weekId_role: {
          weekId: id,
          role: auth.role
        }
      },
      update: {
        learned: learned || "",
        difficulties: difficulties || "",
        notes: notes || ""
      },
      create: {
        weekId: id,
        role: auth.role,
        learned: learned || "",
        difficulties: difficulties || "",
        notes: notes || ""
      }
    });

    return json({ success: true, data: record });
  } catch (error) {
    if (error instanceof Response) return error;
    console.error("Error saving journal:", error);
    return json({ error: "Failed to save journal entry" }, { status: 500 });
  }
}
