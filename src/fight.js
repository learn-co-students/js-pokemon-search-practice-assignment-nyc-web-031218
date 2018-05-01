store = {
  pokemons: []
}
let pokemonId = 0

class Pokemon {
  constructor({name, sprites: {front, back}}) {
    this.id = pokemonId++
    this.name = name
    this.spriteFront = front
    this.spriteBack = back
    store["pokemons"].push(this)
  }
}

Pokemon.random = function() {
  let arr_length = store["pokemons"].length
  let pokemon = store["pokemons"][Math.floor(Math.random()*arr_length)]
  return pokemon
}

pokemons.forEach(item => new Pokemon(item))

document.addEventListener("DOMContentLoaded", function() {

  let leftDraftButton = document.getElementById('leftdraftbutton')
  let rightDraftButton = document.getElementById('rightdraftbutton')

  leftDraftButton.addEventListener('click', function() {
    let leftPokemonBox = document.getElementsByClassName('left-pokemon')
    console.log(leftPokemonBox[0]);
    let pokemon = Pokemon.random()
    console.log(pokemon);
    let newPokemon = document.createElement('div')
    newPokemon.setAttribute('id', `${pokemon.id}`)
    console.log(newPokemon);
    let pokemonTemplate = `${pokemon.name}`
    newPokemon.innerHTML = pokemonTemplate
    console.log(leftPokemonBox);
    leftPokemonBox[0].appendChild(newPokemon)
  })

  rightDraftButton.addEventListener('click', function() {
    let rightPokemonBox = document.getElementById('right-pokemon')
    console.log("poop right");
  })

}) // end
