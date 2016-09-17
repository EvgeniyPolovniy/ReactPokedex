import { LOAD_POKEMONS } from '../../constants'

export function loadPokemons() {
  return {
    type: LOAD_POKEMONS,
    callAPI: 'http://pokeapi.co/api/v1/pokemon/?limit=10'
  }
}
