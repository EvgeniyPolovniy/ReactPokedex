import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPokemons } from '../AC/pokemons'

class Root extends Component {
  componentDidMount() {
    this.props.loadPokemons()
  }
  render() {
    const { pokemonList } = this.props
    return (
      <div>
        <h1 onClick={this.props.loadPokemons}>Test!</h1>
        { pokemonList.map( function(pokemon) {
          let imgUrl = 'http://pokeapi.co/media/img/'+ pokemon.pkdx_id + '.png'
          return (
            <div key={pokemon.name}>
              <p>{pokemon.name}</p>
              <img src={imgUrl} alt=""/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect((state) => {
  return {
    pokemonList: state.pokemonList
  }
}, {
  loadPokemons: loadPokemons
})(Root)
