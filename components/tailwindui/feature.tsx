import {
  ArrowPathIcon,
  CameraIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const features = [
  {
    name: "Great communication",
    description:
      "I want you to feel as comfortable as possible. I work hard to make sure were on the same page about your pet.",
    href: "#",
    icon: HeartIcon,
  },
  {
    name: "Detailed reports & pictures!",
    description:
      "At the end of every session I'll send you a detailed report of exactly what your pet and I did together, and I'll include pictures too!",
    href: "#",
    icon: CameraIcon,
  },
  {
    name: "Quick Response Time",
    description:
      "During normal business hours 9am-5pm I'll usually respond to you're messages within a few minutes.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function Feature() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Peace of mind
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            I&apos;m here to take the stress out of pet care
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            I&apos;m a professional pet sitter living in{" "}
            <Link
              href="https://goo.gl/maps/Hf7KYR8Z7rT5tEys7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              NOPA
            </Link>
            . I&apos;m a member of your community and I&apos;m here to help make
            it a better place!. Here&apos;s what to expect!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  {/* <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p> */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

{
  /* <h2>Why chose me?</h2>
          <ul>
            <li>Over 100 five-star reviews on Rover.</li>
            <li>
              Personalized care from a trustworthy, kind, and approachable pet
              sitter.
            </li>
            <li>
              Comprehensive services, including dog walking, drop-in visits, and
              overnight stays.
            </li>
            <li>Flexible availability to meet your needs.</li>
          </ul>
          <p>
            Book a service with me today and experience the peace of mind that
            comes with knowing your pets are in loving hands.
          </p>
          <button>Book Me!</button> */
}
