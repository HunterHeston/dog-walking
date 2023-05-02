export default function Reviews() {
  return (
    <>
      <header>
        <h1>Here&apos;s what people are saying</h1>
        <p>Over 100 five-star reviews on Rover.</p>
      </header>
      <main>
        <ul>
          <Review
            name="Nate C."
            rating={5}
            review="Cheyenne was awesome. She took great care of our cat while we were away and sent us some great pictures. She stopped by for a meet and greet beforehand, and was quick to respond in the app. We hope to book her again in the future."
            date="Apr 19, 2023"
          ></Review>
          <Review
            name="Erina D."
            review="Cheyenne is awesome. I’d never left my cat Charlie alone for more than a day at a time, so I was very nervous but when Cheyenne did a meet and greet with us, I trusted her right away. She took great care of my girl and sent great updates and pictures. Thank you for helping to relieve first time cat parent anxiety so we could enjoy our vacation without worries! ❤️"
            rating={5}
            date="Apr 17, 2023"
          ></Review>
          <Review
            name="Sara T."
            review="Cheyenne looked after our cat Bijou for a few days while we were out on vacation. She sent super detailed check-ins and lots of photos. Cheyenne went above and beyond with taking care of Bijou, doing not only the basics of her food & cleaning but also setting up enrichment activities and giving her great brushings! Both Bijou and our house were in great shape when we got back (Cheyenne even helped us bring a package inside). Thank you Cheyenne!"
            rating={5}
            date="Apr 11, 2023"
          ></Review>
          <Review
            name="Losu B."
            review="Cheyenne is wonderful and sends the best photos and updates of her visits. She is always on time and extremely responsive. I highly recommend her for when you need someone to take care of your four-legged friend!"
            rating={5}
            date="Apr 3, 2023"
          ></Review>
          <Review
            name="Amber M."
            review="Amazing and friendly pet sitter in SF! Took great care of our two cats, and followed our tedious instructions very well!"
            rating={5}
            date="Mar 24, 2023"
          ></Review>
        </ul>
      </main>
    </>
  );
}

type ReviewProps = {
  name: string;
  rating: number;
  review: string;
  date: string;
};

function Review({ name, rating, review, date }: ReviewProps) {
  return (
    <li>
      <h2>{name}</h2>
      <div>
        {date} | {rating}
      </div>
      <p>{review}</p>
    </li>
  );
}
