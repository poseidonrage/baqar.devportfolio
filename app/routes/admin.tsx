import { type MetaFunction } from "@remix-run/node";
import { AdminConsole } from "~/components/AdminConsole";

export const meta: MetaFunction = () => {
  return [
    { title: "Administrator Console - Baqar Hussain Naqvi" },
    { name: "description", content: "Secure administration control panel for blogs, comments moderation, and system stats." }
  ];
};

export default function AdminRoute() {
  return <AdminConsole />;
}
