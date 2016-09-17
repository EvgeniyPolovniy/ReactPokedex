import { LOAD_POKEMONS, START, SUCCESS, FAIL } from '../../constants'
export default (state = [], action) => {
  switch (action.type) {
    case LOAD_POKEMONS + START:
      console.log(action);
      return state
    case LOAD_POKEMONS + SUCCESS:
      console.log(action);
      return Object.assign([], state, action.response.objects)
    default:
      return state
  }
}
