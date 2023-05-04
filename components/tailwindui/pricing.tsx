import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type Service = {
  name: string;
  id: string;
  href: string;
  price: { base: string; extraPet: string; extraTime?: string };
  description: string;
  features: string[];
};

export type PricingProps = {
  services: Service[];
};

export default function Pricing({ services }: PricingProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for&nbsp;you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
          See my services bellow. If you have any questions or need something
          slightly different, please{" "}
          <Link href="/contact" className="hover:underline text-indigo-600">
            send me a message
          </Link>
          !
        </p>
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {services.map((service) => (
              <div key={service.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3
                  id={service.id}
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  {service.name}
                </h3>
                <p
                  className={
                    "flex items-baseline gap-x-1" + service.price.extraTime
                      ? "mt-6"
                      : "mt-9"
                  }
                >
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {service.price.base}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {["+", service.price.extraTime, "extra 30 minutes"].join(" ")}
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  +{service.price.extraPet} per extra pet
                </p>
                <a
                  href={service.href}
                  aria-describedby={service.id}
                  className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Book this!
                </a>
                <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
                  {service.description}
                </p>
                <ul
                  role="list"
                  className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
