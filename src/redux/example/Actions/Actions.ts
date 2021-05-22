import { Dispatch } from "redux";
import axios from "axios";

import { POKEMON_FAIL, POKEMON_SUCCESS, PokemonDispatchTypes } from "./ActionsTypes";

export const GetPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: POKEMON_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POKEMON_FAIL,
    });
  }
};
