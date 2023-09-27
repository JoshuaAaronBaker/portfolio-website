// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { body } = await req.json();
  const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: "Joshua <mail@joshuabaker.dev",
      to: ["joshua.aaron.baker.dev@gmail.com"],
      subject: "Hello world",
      react: (
        <>
          <h1>{subject}</h1>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
