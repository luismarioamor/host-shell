import React from "react";
import style from "./style.module.css";
import { color, background } from "./colors";
import { IPokemon, IPokemonSpecies } from "@/types";

interface IProps {
  src: string;
  bgColorCard: string;
  pokemon: IPokemon;
  pokemonSpecies: IPokemonSpecies;
}

export default function CardPokemon({
  src,
  bgColorCard,
  pokemon,
  pokemonSpecies,
}: IProps) {
  return (
    <article className={style.card}>
      <img
        width={200}
        height={200}
        className={style.img_poke}
        src={src}
        alt="pokemon"
      />

      <section
        className={style.sub_card}
        style={{
          background: (background[bgColorCard] as string) || background.all,
        }}
      >
        <strong className={style.id_card}>#{pokemon.id}</strong>
        <strong className={style.name_card}> {pokemon.name} </strong>
        <h4 className={style.general_data}> Height: {pokemon.height}0 cm </h4>
        <h4 className={style.general_data}>Weight: {pokemon.weight} Kg </h4>
        <h4 className={style.general_data}>
          Habitat: {pokemonSpecies?.habitat?.name}{" "}
        </h4>
        <section className={style.div_stats}>
          {pokemon?.stats?.map((sta, index) => {
            return (
              <h6 key={index} className={style.item_stats}>
                <span className={style.name}> {sta.stat.name} </span>
                <div className={style.progress}>
                  <progress value={sta.base_stat} max={110}></progress>
                </div>
                <span className={style.number}> {sta.base_stat} </span>
              </h6>
            );
          })}
        </section>

        <section className={style.div_type_color}>
          {pokemon?.types?.map((ti, index) => {
            return (
              <h6
                key={index}
                className={style.color_type}
                style={{
                  background: (color[ti.type.name] as string) || color.all,
                }}
              >
                {ti.type.name}
              </h6>
            );
          })}{" "}
        </section>
      </section>
    </article>
  );
}
