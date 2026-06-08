import { json, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/Hero";
import { SectionSeparator } from "~/components/SectionSeparator";
import { Expertise } from "~/components/Expertise";
import { Projects } from "~/components/Projects";
import { Experience } from "~/components/Experience";
import { Contact } from "~/components/Contact";
import { prisma } from "~/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Baqar Hussain Naqvi - Portfolio" },
    { name: "description", content: "Personal portfolio and curriculum tracker of Baqar Hussain Naqvi, Program Analyst and Integration Specialist." }
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "contact") {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    try {
      await prisma.message.create({
        data: { name, email, message }
      });
      return json({ success: true });
    } catch (err: any) {
      console.error("Failed to save contact message:", err);
      return json({ success: false, error: "Database save failed" }, { status: 500 });
    }
  }

  return json({ success: false, error: "Unknown intent" }, { status: 400 });
}

export default function IndexRoute() {
  return (
    <>
      <Hero />
      <SectionSeparator leftText="01 // software engineer" rightText="02 // expertise" />
      <Expertise />
      <SectionSeparator leftText="02 // capabilities" rightText="03 // work" />
      <Projects />
      <SectionSeparator leftText="03 // featured work" rightText="04 // experience" />
      <Experience />
      <SectionSeparator leftText="04 // history" rightText="06 // contact" />
      <Contact />
    </>
  );
}
