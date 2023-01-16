import { PokeduxCard } from "../PokeduxCard";
import "./PokeduPokedex.scss";

export function PokeduxPokemonList(props) {
  const { pokemons } = props;
  return (
    <div className="pokemonList">
      {pokemons.map((pokemon, index) => {
        return <PokeduxCard key={index} pokemon={pokemon} />;
      })}
    </div>
  );
}
