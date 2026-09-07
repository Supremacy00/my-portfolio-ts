interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface SaveContactFormResult {
  success: boolean;
  error?: string;
}

export const saveContactFormData = async ({
  name,
  email,
  message,
}: ContactFormData): Promise<SaveContactFormResult> => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.error || "Failed to submit form. Please try again.");
    }

    return { success: true };
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to submit form. Please try again.";

    console.error("Error saving message:", errorMessage);

    return { success: false, error: errorMessage };
  }
};
