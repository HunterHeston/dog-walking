export default function Services() {
  return (
    <>
      <header>
        <h1>Services I Provide</h1>
      </header>
      <main>
        <ul>
          <li>
            <ServiceCard
              name="House Sitting"
              description="Overnight stay in your home."
              price={150}
            >
              <p>Additional Dog Rate per dog per night + $90</p>
              <p>Puppy Rate per night $165</p>
              <p>Cat Care per night $150</p>
              <p>Extended Care of nightly rate 50-100%</p>
            </ServiceCard>
          </li>
          <li>
            <ServiceCard
              name="Drop-In Visits"
              description="30 minute visit in your home."
              price={25}
            >
              <p>60 minute rate per visit + $22</p>
              <p>Holiday Rate per visit $25</p>
              <p>Additional Dog Rate per dog per visit + $8</p>
              <p>Puppy Rate per visit $22</p>
              <p>Cat Care per visit $22</p>
            </ServiceCard>
          </li>
          <li>
            <ServiceCard
              name="Dog Walking"
              description="30 minute walk in your neighborhood."
              price={25}
            >
              <p>60 minute rate per walk + $15</p>
              <p>Holiday Rate per walk $25</p>
              <p>Additional Dog Rate per dog per walk + $18</p>
              <p>Puppy Rate per walk $28</p>
            </ServiceCard>
          </li>
        </ul>
      </main>
    </>
  );
}

type serviceProps = {
  name: string;
  description: string;
  price: number;
  children?: React.ReactNode;
};

function ServiceCard({ name, description, price, children }: serviceProps) {
  return (
    <>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      {children}
      <button>Book this service</button>
    </>
  );
}
