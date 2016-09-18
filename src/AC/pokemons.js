import { LOAD_POKEMONS } from '../../constants'

export function loadPokemons() {
  return {
    type: LOAD_POKEMONS,
    callAPI: 'https://pokeapi.co/api/v1/pokemon/?limit=10'
  }
}
