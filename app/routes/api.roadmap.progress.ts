import { json, type LoaderFunctionArgs, type ActionFunctionArgs } from "@remix-run/node";
import { prisma } from "~/db.server";
import { authenticateRoadmapRequest } from "~/auth.server";

// CORS preflight
export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const auth = await authenticateRoadmapRequest(request);
    const progress = await prisma.roadmapProgress.findMany({
      where: { role: auth.role }
    });
    return json(progress);
  } catch (error) {
    if (error instanceof Response) return error;
    console.error("Error fetching progress:", error);
    return json({ error: "Failed to fetch progress" }, { status: 500 });
  }
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const auth = await authenticateRoadmapRequest(request);
    const { taskId, completed } = await request.json();

    if (!taskId) {
      return json({ error: "taskId is required" }, { status: 400 });
    }
    const isCompleted = !!completed;

    const record = await prisma.roadmapProgress.upsert({
      where: {
        taskId_role: {
          taskId,
          role: auth.role
        }
      },
      update: { completed: isCompleted },
      create: {
        taskId,
        role: auth.role,
        completed: isCompleted
      }
    });

    return json({ success: true, data: record });
  } catch (error) {
    if (error instanceof Response) return error;
    console.error("Error saving progress:", error);
    return json({ error: "Failed to save progress" }, { status: 500 });
  }
}
