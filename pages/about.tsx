import Image from "next/image";

export default function About() {
  return (
    <>
      <header>
        <h1>Cheyenne Hawken</h1>
        <p>29 She/Her</p>
        <p>San Francisco, NOPA</p>
        <Image
          src="/cheyenne.webp"
          width={100}
          height={100}
          alt="Cheyenne with calla"
        ></Image>
        <p>
          I am a 29-year-old voice actor and pet lover originally from the
          Midwest. After moving to San Francisco two years ago, I decided to
          pursue my passion for animals by offering professional dog walking and
          pet sitting services.
        </p>
        <p>
          With two cats of my own, I understand the importance of providing a
          safe, nurturing environment for your pets. I am a kind,
          easy-to-talk-to, and excellent communicator who treats each pet as if
          they were my own.
        </p>
        <p>
          After each pet sitting, I enjoy providing detailed write-ups to keep
          you updated on your pet&apos;s adventures. Trust me to provide the
          highest quality of care for your beloved pets.
        </p>
      </header>
    </>
  );
}
