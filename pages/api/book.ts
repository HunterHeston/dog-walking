// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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

  console.log(req.body);
  const {
    serviceType,
    duration,
    days,
    petName,
    petBreeds,
    petAge,
    petWeight,
    firstName,
    lastName,
    phoneNumber,
    streetAddress,
    city,
    state,
    postalCode,
    message,
  } = req.body;

  // log all the values received
  console.log("serviceType: ", serviceType);
  console.log("duration: ", duration);
  console.log("days: ", days);
  console.log("petName: ", petName);

  console.log("petBreeds: ", petBreeds);
  console.log("petAge: ", petAge);
  console.log("petWeight: ", petWeight);
  console.log("firstName: ", firstName);
  console.log("lastName: ", lastName);
  console.log("phoneNumber: ", phoneNumber);
  console.log("streetAddress: ", streetAddress);
  console.log("city: ", city);
  console.log("state: ", state);
  console.log("postalCode: ", postalCode);
  console.log("message: ", message);

  console.log(req.body);

  res.status(200).json({ success: true });
}
