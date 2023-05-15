import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

enum Duration {
  ThirtyMinutes = 30,
  SixtyMinutes = 60,
}

export default function WalkForm() {
  // pet and stay information
  const initialDays: Date[] = [];
  const [duration, setDuration] = useState<Duration>(Duration.ThirtyMinutes);
  const [days, setDays] = useState<Date[] | undefined>(initialDays);
  const [petName, setPetName] = useState<string>("");
  const [petBreeds, setPetBreeds] = useState<string>("");
  const [petAge, setPetAge] = useState<number>(0);
  const [petWeight, setPetWeight] = useState<number>(0);

  // owner information
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [streetAddress, setStreetAddress] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // submit handler that sends the form data to the backend at api/book
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/book", {
      body: JSON.stringify({
        serviceType: "dog-walk",
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
        city: "San Francisco",
        state: "CA",
        postalCode,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="pb-12">
          {/* The pets personal information */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Your Pets Information
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* stay duration */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="pet-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Duration of stay?
                </label>
                <div className="mt-2 flex">
                  <button
                    type="button"
                    onClick={() => setDuration(Duration.ThirtyMinutes)}
                    className={
                      duration === Duration.ThirtyMinutes
                        ? "w-1/2 mr-1 flex flex-col items-center justify-center px-4 py-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                        : "w-1/2 mr-1 flex flex-col items-center justify-center px-4 py-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700"
                    }
                  >
                    30 minutes
                  </button>
                  <button
                    type="button"
                    onClick={() => setDuration(Duration.SixtyMinutes)}
                    className={
                      duration === Duration.SixtyMinutes
                        ? "w-1/2 mr-1 flex flex-col items-center justify-center px-4 py-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                        : "w-1/2 mr-1 flex flex-col items-center justify-center px-4 py-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700"
                    }
                  >
                    60 minutes
                    <span
                      className={
                        duration === Duration.SixtyMinutes
                          ? "text-indigo-300"
                          : "text-gray-300"
                      }
                    >
                      +$15 per walk
                    </span>
                  </button>
                </div>
              </div>

              {/* selected days */}
              <div className="sm:col-span-4 flex">
                <label htmlFor="dates">
                  Date(s)
                  <Calendar
                    mode="multiple"
                    min={1}
                    selected={days}
                    onSelect={setDays}
                    className="rounded-md border mt-4"
                  />
                </label>
              </div>

              {/* name of the pet */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="pet-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Pet Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="pet-name"
                    id="pet-name"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* weight of the pet */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="pet-weight"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Weight(lbs)
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="pet-weight"
                    id="pet-weight"
                    value={petWeight}
                    onChange={(e) => setPetWeight(Number(e.target.value))}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* breed of animal */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="pet-breeds"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Breed(s)
                </label>
                <div className="mt-2">
                  <input
                    id="pet-breeds"
                    name="pet-breeds"
                    type="text"
                    value={petBreeds}
                    onChange={(e) => setPetBreeds(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* age information */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="pet-age"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Age(years)
                </label>
                <div className="mt-2">
                  <input
                    id="pet-age"
                    name="pet-age"
                    type="number"
                    value={petAge}
                    onChange={(e) => setPetAge(Number(e.target.value))}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="pet-sex"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sex
                </label>
                <div className="mt-2">
                  <select
                    id="pet-sex"
                    name="pet-sex"
                    placeholder="Select an option"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>select an option</option>
                    <option>Female</option>
                    <option>Male</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* The humans personal information */}
          <div className="border-b border-gray-900/10 py-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Your Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Your name and the location I&apos;ll be picking your pet up! The
              walk will take place in your neighborhood.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone Number
                  <span className="text-gray-400">(I will text you)</span>
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value="San Francisco"
                    disabled
                    autoComplete="address-level2"
                    className="hover:cursor-not-allowed block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    value="California"
                    disabled
                    autoComplete="address-level1"
                    className="hover:cursor-not-allowed block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Please include any other information you would like me to be
                aware of.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex col-span-6 items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md w-full bg-indigo-600 p-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send
        </button>
      </div>
    </form>
  );
}
