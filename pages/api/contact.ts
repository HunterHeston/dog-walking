// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendTextMessage } from "@/lib/twillio";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  error?: string;
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "method not allowed", success: false });
    return;
  }

  const { firstName, lastName, phoneNumber, message } = req.body;
  const result = await sendTextMessage(
    firstName,
    lastName,
    phoneNumber,
    message
  );

  if (result instanceof Error) {
    res.status(500).json({ error: result.message, success: false });
    return;
  }

  res.status(200).json({ success: true });
}
