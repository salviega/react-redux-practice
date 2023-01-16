import React, { useEffect } from "react";
import { PokeduxSearcher } from "../PokeduxSearcher";
import "./App.scss";
import { Col } from "antd";
import { PokeduxPokemonList } from "../PokeduxPokemonList";
import logo from "../../assets/images/logo.svg";
import { getPokemonDetails, getPokemons } from "../../services/getPokemons";
import { setPokemons as setPokemonsActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = await getPokemons();
      const pokemonDetails = await Promise.all(
        pokemons.map((pokemon) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemonsActions(pokemonDetails));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="app">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <PokeduxSearcher />
      </Col>
      <PokeduxPokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
