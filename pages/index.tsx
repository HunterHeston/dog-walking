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
          <Feature></Feature>
        </section>
        <section>
          <FAQ></FAQ>
        </section>
      </main>
    </>
  );
}
