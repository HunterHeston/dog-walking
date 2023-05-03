import FAQ from "@/components/tailwindui/faq";
import Feature from "@/components/tailwindui/feature";
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
        </section>
        <section>
          <Feature></Feature>
        </section>
        <section>
          <FAQ></FAQ>
        </section>
      </main>
    </>
  );
}
