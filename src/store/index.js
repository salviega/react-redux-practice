import { actionPokedux } from "./actionsTypes";

export const setPokemons = (payload) => ({
  type: actionPokedux.SET_POKEMONS,
  payload,
});
