import { createFileRoute } from "@tanstack/react-router";
import { handleContactSubmission } from "@/lib/contact.server";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => handleContactSubmission(request),
      GET: async () => Response.json({ success: false }, { status: 405 }),
    },
  },
});
