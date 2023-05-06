// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

const accountSid = process.env.TWILLIO_ACCOUNT_SID;
const authToken = process.env.TWILLIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILLIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

type Data = {
  error?: string;
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { firstName, lastName, phoneNumber, message } = JSON.parse(req.body);
  console.log(firstName, lastName, phoneNumber, message);
  console.log(req.body);

  const messageBody = `
  You have a new contact form submission.

${firstName} ${lastName} 
${phoneNumber}
----------
${message}`;

  try {
    const message = await client.messages.create({
      body: messageBody,
      from: twilioNumber,
      to: "+19048788606",
    });
    console.log(message);
  } catch (err: any) {
    console.error("error sending text: ", err);
    res
      .status(500)
      .json({ error: "failed to send sms message", success: false });
    return;
  }

  res.status(200).json({ success: true });
}
