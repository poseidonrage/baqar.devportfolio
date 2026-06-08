import { json, type ActionFunctionArgs } from "@remix-run/node";
import { prisma } from "~/db.server";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const { page, referrer } = await request.json();
    const ip = request.headers.get("x-forwarded-for") || null;
    const userAgent = request.headers.get("user-agent") || null;

    const stat = await prisma.visitorStat.create({
      data: {
        page: page || "/",
        referrer: referrer || null,
        ip,
        userAgent,
      },
    });

    return json({ success: true, data: stat }, { status: 201 });
  } catch (error) {
    console.error("Error saving visitor stat:", error);
    return json({ error: "Failed to record visitor stats" }, { status: 500 });
  }
}
