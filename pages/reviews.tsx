import Testimonials, {
  Testimonial,
} from "@/components/tailwindui/testimonials";

const featuredTestimonial: Testimonial = {
  date: "Apr 19, 2023",
  body: "Cheyenne was awesome. She took great care of our cat while we were away and sent us some great pictures. She stopped by for a meet and greet beforehand, and was quick to respond in the app. We hope to book her again in the future.",
  rating: 5,
  author: {
    name: "Nate C.",
  },
};

const testimonials: Testimonial[][][] = [
  [
    [
      {
        date: "Apr 17, 2023",
        rating: 5,
        body: "Cheyenne is awesome. I’d never left my cat Charlie alone for more than a day at a time, so I was very nervous but when Cheyenne did a meet and greet with us, I trusted her right away. She took great care of my girl and sent great updates and pictures. Thank you for helping to relieve first time cat parent anxiety so we could enjoy our vacation without worries! ❤️",
        author: {
          name: "Erina D.",
        },
      },
    ],
    [
      {
        date: "Apr 11, 2023",
        rating: 5,
        body: "Cheyenne looked after our cat Bijou for a few days while we were out on vacation. She sent super detailed check-ins and lots of photos. Cheyenne went above and beyond with taking care of Bijou, doing not only the basics of her food & cleaning but also setting up enrichment activities and giving her great brushings! Both Bijou and our house were in great shape when we got back (Cheyenne even helped us bring a package inside). Thank you Cheyenne!",
        author: {
          handle: "@saraht",
          name: "Sara T.",
        },
      },
    ],
  ],
  [
    [
      {
        date: "Apr 3, 2023",
        rating: 5,
        body: "Cheyenne is wonderful and sends the best photos and updates of her visits. She is always on time and extremely responsive. I highly recommend her for when you need someone to take care of your four-legged friend!",
        author: {
          handle: "@saraht",
          name: "Losu B.",
          imageUrl: "",
        },
      },
    ],
    [
      {
        date: "Mar 24, 2023",
        rating: 5,
        body: "Amazing and friendly pet sitter in SF! Took great care of our two cats, and followed our tedious instructions very well!",
        author: {
          name: "Amber M.",
        },
      },
    ],
  ],
];

export default function Reviews() {
  return (
    <>
      <main>
        <Testimonials
          featuredTestimonial={featuredTestimonial}
          testimonials={testimonials}
        ></Testimonials>
      </main>
    </>
  );
}
