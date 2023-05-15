import twilio from "twilio";

const accountSid = process.env.TWILLIO_ACCOUNT_SID;
const authToken = process.env.TWILLIO_AUTH_TOKEN;
const targetNumber = process.env.TWILLIO_TARGET_PHONE_NUMBER;
// const targetNumber = process.env.TWILLIO_TARGET_PHONE_NUMBER;
const twilioNumber = process.env.TWILLIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

export async function sendTextMessage(
  firstName: string,
  lastName: string,
  phoneNumber: string,
  message: string
): Promise<Error | null> {
  if (
    accountSid === undefined ||
    authToken === undefined ||
    targetNumber === undefined ||
    twilioNumber === undefined
  ) {
    return new Error("missing twilio env vars");
  }

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
      to: targetNumber,
    });
    console.log(message);
  } catch (err: any) {
    console.error("error sending text: ", err);
    return new Error("failed to send sms message");
  }

  return null;
}

// booking request input type
export type BookingRequestInput = {
  serviceType: string;
  duration: string;
  days: string;
  petName: string;
  petBreeds: string;
  petAge: string;
  petWeight: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  message: string;
};

export async function sendBookingRequest(
  bookingRequest: BookingRequestInput
): Promise<Error | null> {
  if (
    accountSid === undefined ||
    authToken === undefined ||
    targetNumber === undefined ||
    twilioNumber === undefined
  ) {
    return new Error("missing twilio env vars");
  }

  const messageBody = `
  You have a new booking request:

-----Client Information-----
${bookingRequest.firstName} ${bookingRequest.lastName}
${bookingRequest.phoneNumber}
${bookingRequest.streetAddress}
${bookingRequest.city}, ${bookingRequest.state} ${bookingRequest.postalCode}

-----Pet Information-----
${bookingRequest.petName} - ${bookingRequest.petAge} years old
${bookingRequest.petBreeds} - ${bookingRequest.petWeight} lbs

-----Booking Information-----
${bookingRequest.serviceType} - ${bookingRequest.duration} - ${bookingRequest.days} days

-----Client Message-----
${bookingRequest.message}`;

  try {
    const message = await client.messages.create({
      body: messageBody,
      from: twilioNumber,
      to: targetNumber,
    });
    console.log(message);
  } catch (err: any) {
    console.error("error sending text: ", err);
    return new Error("failed to send sms message");
  }

  return null;
}
