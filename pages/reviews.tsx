import Testimonials, {
  Testimonial,
} from "@/components/tailwindui/testimonials";

const featuredTestimonial: Testimonial = {
  date: "Apr 17, 2023",
  body: "Cheyenne is awesome. I’d never left my cat Charlie alone for more than a day at a time, so I was very nervous but when Cheyenne did a meet and greet with us, I trusted her right away. She took great care of my girl and sent great updates and pictures. Thank you for helping to relieve first time cat parent anxiety so we could enjoy our vacation without worries! ❤️",
  rating: 5,
  author: {
    name: "Erina D.",
    imageUrl: "/testimonials/erina-d.webp",
  },
};

const testimonials: Testimonial[][][] = [
  [
    [
      {
        date: "Apr 11, 2023",
        rating: 5,
        body: "Cheyenne looked after our cat Bijou for a few days while we were out on vacation. She sent super detailed check-ins and lots of photos. Cheyenne went above and beyond with taking care of Bijou, doing not only the basics of her food & cleaning but also setting up enrichment activities and giving her great brushings! Both Bijou and our house were in great shape when we got back (Cheyenne even helped us bring a package inside). Thank you Cheyenne!",
        author: {
          name: "Sarah T.",
          imageUrl: "/testimonials/sarah-t.webp",
        },
      },
      {
        date: "Feb 21, 2023",
        rating: 5,
        body: "Cheyenne is the best! She is so responsive and gave me great updates and photos of my kitty while I was away. 10/10 recommend?",
        author: {
          name: "Abagail P.",
          imageUrl: "/testimonials/abagail-p.webp",
        },
      },
      {
        date: "Feb 20, 2023",
        rating: 5,
        body: "Cheyenne took amazing care of our three cats while we were out of town. She’s highly communicative, had great “cat energy” that our kittens loved, and kept them happy and healthy. We’ll absolutely rely on her again!",
        author: {
          name: "Christopher W.",
          imageUrl: "/testimonials/christopher-w.webp",
        },
      },
    ],
    [
      {
        date: "Mar 29, 2023",
        rating: 5,
        body: "Tractor was a happy pup when I came home & seemed like he had a great time with Cheyenne. She sent a detailed update about their walk & followed all instructions to make sure he was comfortable & stayed out of trouble :) Would love to have Cheyenne back for more walks!",
        author: {
          name: "Sierra M.",
          imageUrl: "/testimonials/sierra-m.webp",
        },
      },
      {
        date: "Feb 25, 2023",
        rating: 5,
        body: "Our kitty took an instant liking to Cheyenne and she took excellent care of her while we were away. Her updates were detailed and she took the cutest pics. I wouldn’t hesitate to have her watch our girl again.",
        author: {
          name: "Karissa B.",
          imageUrl: "/testimonials/karissa-b.webp",
        },
      },
    ],
  ],
  [
    [
      {
        date: "Feb 2, 2023",
        rating: 5,
        body: "Cheyenne and Pumpkin got along beautifully at our meet and greet. I felt very comfortable having her drop in three times in a row while I had to be away from home unexpectedly. She gives such detailed notes afterwards too, which is so appreciated. Cheyenne will definitely be one of my top choices for future drop-in visits and dog walking.",
        author: {
          name: "Edie W.",
          imageUrl: "/testimonials/edie-w.webp",
        },
      },
      {
        date: "Mar 23, 2023",
        rating: 5,
        body: "Amazing and friendly pet sitter in SF! Took great care of our two cats, and followed our tedious instructions very well!",
        author: {
          name: "Amber M.",
          imageUrl: "/testimonials/amber-m.webp",
        },
      },
    ],
    [
      {
        date: "Mar 23, 2023",
        rating: 5,
        body: "Cheyenne is one of the best sitters we've ever hired. She has been taking care of our dog and two cats for months now and is incredibly reliable. Our dog, Levi, loves going on long walks with her. What makes Cheyenne special is that she goes above and beyond with her care. We appreciate all the small things she does like bringing a laser pointer to entertain our cats or wiping our dog's paws if he walked in mud, without ever being asked to do so! Could not recommend Cheyenne enough.",
        author: {
          name: "Raghav M.",
          imageUrl: "/testimonials/raghav-m.webp",
        },
      },
      {
        date: "Mar 15, 2023",
        rating: 5,
        body: "Cheyenne was so wonderful with Digby. He wasn’t used to a walker and she was very patient and made him feel comfortable. She’s very responsive and goes above and beyond.",
        author: {
          name: "Shannon H.",
          imageUrl: "/testimonials/shannon-h.webp",
        },
      },
      {
        date: "Jan 3, 2023",
        rating: 5,
        body: "Cheyenne was excellent! I highly recommend her!",
        author: {
          name: "Syed Usama A.",
          imageUrl: "/testimonials/syed-usama-a.webp",
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
