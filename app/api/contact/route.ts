import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

let lastRequestTimestamp = 0;

export async function POST(req: Request) {
  const now = Date.now();
  if (now - lastRequestTimestamp < 3000) {
    return new Response(
      JSON.stringify({ success: false, error: "Rate limit exceeded" }),
      { status: 429 },
    );
  }
  lastRequestTimestamp = now;

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message || message.length > 5000) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid input" }),
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Lauf Contact Form <contact@lauf.co>",
      to: ["michael@lauf.co"],
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `
New inquiry received:

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Internal server error" }),
      { status: 500 },
    );
  }
}
