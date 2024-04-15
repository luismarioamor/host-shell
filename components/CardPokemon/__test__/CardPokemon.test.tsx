import { render, screen } from "@testing-library/react";
import CardPokemon from "..";
import { mockPokemon, mockPokemonSpecie } from "../mockPokemon";

describe("CardPokemon", () => {
  it("should render the CardPokemon component with correct data", () => {
    render(
      <CardPokemon
        bgColorCard="green"
        pokemon={mockPokemon}
        pokemonSpecies={mockPokemonSpecie}
        dataTestId="cardTestId"
      />
    );

    expect(screen.getByTestId("cardTestId")).toBeInTheDocument();
    expect(screen.getByText("#1")).toBeInTheDocument();
    expect(screen.getByText("bulbasaur")).toBeInTheDocument();
    expect(screen.getByText("Height: 70 cm")).toBeInTheDocument();
    expect(screen.getByText("Weight: 69 Kg")).toBeInTheDocument();
    expect(screen.getByText("speed")).toBeInTheDocument();
    expect(screen.getByText("grass")).toBeInTheDocument();
  });

  it("should render the default image when src is not provided", () => {
    render(
      <CardPokemon
        bgColorCard="green"
        pokemon={mockPokemon}
        pokemonSpecies={mockPokemonSpecie}
        dataTestId="cardTestId"
      />
    );

    const defaultImage = screen.getByAltText("pokemon");
    expect(defaultImage).toBeInTheDocument();
  });
});
