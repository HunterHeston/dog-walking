import Link from "next/link";

const faqs = [
  {
    question: "Will you walk my dog?",
    answer:
      "Yes I will! I offer both 30 minute and 60 minute walks. Depending on availability, I can offer same day walks. Please contact me for more information.",
  },
  {
    question: "Will you pet sit my cat or dog?",
    answer: "Yes I will! I offer both in-home pet sitting.",
  },
  {
    question: "What is your service area?",
    // TODO: need cheyenne to answer this
    answer:
      "I primarily service the NOPA area of San Francisco. I also service the surrounding neighborhoods.",
  },
  {
    question: "Do you offer overnight pet sitting?",
    answer:
      "Yes I do! I offer overnight pet sitting in your home for repeat clients only.",
  },
  {
    question: "Do you offer dog boarding?",
    answer:
      "Yes I do! I offer dog boarding in my home for repeat clients only.",
  },
  {
    question: "What are your rates?",
    answer: "Please checkout my services page!",
  },
];

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Can’t find the answer you’re looking for? Please{" "}
              <Link
                href="/contact"
                className="font-semibold text-indigo-600 hover:text-indigo-500 hover:underline"
              >
                send me a message!
              </Link>{" "}
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
