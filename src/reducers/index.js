import pokemons from './pokemons'
import { combineReducers } from 'redux'

export default combineReducers({
  pokemonList: pokemons
})
