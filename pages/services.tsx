import Pricing, { PricingProps } from "@/components/tailwindui/pricing";

const tiers = [
  {
    name: "30 Minute Dog Walking",
    id: "dog-walking",
    // TODO: href with url params to seed form
    href: "#",
    price: { base: "$25", extraPet: "$10", extraTime: "$15" },
    description: "I'll walk your dog while you are at work or away.",
    features: [
      "30/60 minute walk in your neighborhood",
      "Pictures of your pup",
      "Detailed report card",
    ],
  },
  {
    name: "30 Minute Drop-In Visit",
    id: "drop-in-visits",
    // TODO: href with url params to seed form
    href: "#",
    price: { base: "$25", extraPet: "$5", extraTime: "$22" },
    description:
      "I will visit your home and care for your pets while you are away.",
    features: [
      "30/60 minute visit in your home",
      "Feed and water as needed",
      "Clean litter box or let dog out to potty",
      "Pictures of your furry friends",
      "Detailed report card",
    ],
  },
  {
    name: "Overnight Stay",
    id: "overnight-stays",
    // TODO: href with url params to seed form
    href: "#",
    price: { base: "$150", extraPet: "$25", extraTime: "" },
    description: "I will stay overnight in your home with your pets.",
    features: [
      "12 hour stay in your home",
      "Updates and pictures of your pets",
      "Feed and water as needed",
      "Clean litter box or let dog out to potty",
      "Detailed report card",
    ],
  },
];

export default function Services() {
  return (
    <>
      <main>
        <Pricing services={tiers}></Pricing>
      </main>
    </>
  );
}
