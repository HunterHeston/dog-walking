import Header from "@/components/tailwindui/header";

export default function Home() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <section>
          <h2>Welcome to my cozy corner of pet care!</h2>
          <p>
            I&apos;m here to make sure your furry friends are treated like
            family! As an experienced and caring dog walker and pet sitter, I am
            here to give your pets the love, attention, and exercise they need
            while you&apos;re away.
          </p>
        </section>
        <section>
          <h2>Why chose me?</h2>
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
            comes with knowing your pets are in loving hands
          </p>
          <button>Book Me!</button>
        </section>
      </main>
    </>
  );
}
