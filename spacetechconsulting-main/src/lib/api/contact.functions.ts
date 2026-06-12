import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(6),
  service: z.string().min(1),
  message: z.string().min(1),
});

export const submitContactForm = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    const recipientEmail = process.env.CONTACT_TO_EMAIL ?? "aryanthealgohype@gmail.com";

    if (!webhookUrl) {
      console.warn("CONTACT_WEBHOOK_URL is not configured. Contact submission was not emailed.", data);
      return {
        ok: true,
        configured: false,
      };
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: recipientEmail,
        subject: `New SpaceTech enquiry: ${data.service}`,
        ...data,
      }),
    });

    if (!response.ok) {
      throw new Error("Contact notification failed");
    }

    return {
      ok: true,
      configured: true,
    };
  });
