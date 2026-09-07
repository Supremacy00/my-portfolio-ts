import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { getContactEmailHtml, getContactEmailText } from "@/lib/emailTemplates";
import * as Yup from "yup";

const contactSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name should be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message should be at least 10 characters")
    .required("Message is required"),
});

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    await contactSchema.validate(body);

    const { name, email, message } = body;

    await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM as string,
      to: process.env.CONTACT_EMAIL_TO as string,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      html: getContactEmailHtml({ name, email, message }),
      text: getContactEmailText({ name, email, message }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to submit form.";

    console.error("Contact form error:", errorMessage);

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 400 },
    );
  }
}
