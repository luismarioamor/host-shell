declare module "hostShell/card" {
  import React from "react";
  import { IPokemon, IPokemonSpecies } from "@/types";

  interface IProps {
    src: string;
    bgColorCard: string;
    pokemon: IPokemon;
    pokemonSpecies: IPokemonSpecies;
  }

  const CardPokemon: React.FC<IProps>;
  export default CardPokemon;
}

declare module "pokemonOne/pokemonOne" {
  import React from "react";
  const PokemonOne: React.FC<{}>;
  export default PokemonOne;
}
