import Head from "next/head";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Button from "@/components/Button";
import style from "./style.module.css";

const PokemonOne = dynamic(() => import("pokemonOne/pokemonOne"), {
  ssr: false,
  suspense: true,
  loading: () => <p>Loading...</p>,
});

const PokemonTwo = dynamic(() => import("pokemonTwo/pokemonTwo"), {
  ssr: false,
  suspense: true,
  loading: () => <p>Loading...</p>,
});

const PokemonThree = dynamic(() => import("pokemonThree/pokemonThree"), {
  ssr: false,
  suspense: true,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  useEffect(() => {
    const handleButtonClick = () => {
      const event = new CustomEvent("buttonClicked");
      window.dispatchEvent(event);
    };

    const button = document.getElementById("buttonChange");
    button?.addEventListener("click", handleButtonClick);

    return () => {
      button?.removeEventListener("click", handleButtonClick);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Micro frontend Pokemon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={style.container}>
          <Button />

          <section className={style.section}>
            <PokemonOne />
            <PokemonTwo />
            <PokemonThree />
          </section>
        </div>
      </main>
    </>
  );
}
