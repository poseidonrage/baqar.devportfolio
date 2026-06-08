import { json, type ActionFunctionArgs } from "@remix-run/node";
import { prisma } from "~/db.server";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return json({ error: "Name, email, and message are required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json({ error: "Invalid email format" }, { status: 400 });
    }

    const newMessage = await prisma.message.create({
      data: { name, email, message },
    });

    return json({ success: true, data: newMessage }, { status: 201 });
  } catch (error) {
    console.error("Error saving contact message:", error);
    return json({ error: "Failed to submit contact message" }, { status: 500 });
  }
}
