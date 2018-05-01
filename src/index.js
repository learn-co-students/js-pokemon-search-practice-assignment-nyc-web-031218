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

pokemons.forEach(item => new Pokemon(item))

document.addEventListener("DOMContentLoaded", function() {

  let pokemonSearchForm = document.getElementById('pokemon-search-form')
  let pokemonSearchInput = document.getElementById('pokemon-search-input')

  function findPokemon (search) {
    let searchLength = search.length
    return store["pokemons"].filter(pokemon => {
      return pokemon.name.slice(0, searchLength) === search
    })
  }

  pokemonSearchForm.addEventListener('submit', function(event){
    event.preventDefault()
  })

  pokemonSearchInput.addEventListener('keyup', function () {

    // delete all the pokemon
    let pokemonContainer = document.querySelector('#pokemon-container')
    pokemonContainer.innerHTML = ""

    //delete all the flip event handlers

    // function to create pokemon on the page
    function displayPokemon(pokemon) {
      let pokemonDivContainer = document.createElement('div')
      pokemonDivContainer.setAttribute('class', 'pokemon-container')
      let pokemonTemplate = `
      <div class="pokemon-container" id="pokemon${pokemon.id}">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img src="${pokemon.spriteFront}" class="pokemonImg" id="pokemonImg${pokemon.id}">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemon.name}" data-action="flip-image">flip card</p>
        </div>
      </div>`;
      pokemonDivContainer.innerHTML = pokemonTemplate
      pokemonDiv.append(pokemonDivContainer)
      addPokemonFlip(pokemon)
    }

    function addPokemonFlip (pokemon) {
      let flipAction = document.querySelector(`[data-pokename="${pokemon.name}"]`)
      flipAction.addEventListener('click', function() {
        console.log("poop");
        let image = document.getElementById(`pokemonImg${pokemon.id}`)
        if (image.getAttribute('src') === pokemon.spriteFront) {
          image.setAttribute('src', `${pokemon.spriteBack}`)
        } else {
          image.setAttribute('src', `${pokemon.spriteFront}`)
        }
      })
    }

    pokemonSearchInputValue = pokemonSearchInput.value
    let foundPokemon = findPokemon(pokemonSearchInputValue)
    let pokemonDiv = document.createElement('div')
    pokemonContainer.append(pokemonDiv)
    foundPokemon.forEach(pokemon => displayPokemon(pokemon))
  })

}) // end
