const pokemonObject = {}
allPokemon["pokemons"].forEach((object) => {
  const newPokemon = new Pokemon(object)
  pokemonObject[newPokemon.name] = newPokemon
})

document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('pokemon-search-input')
  const pokemonContainer = document.getElementById('pokemon-container')

  searchInput.addEventListener('input', searchPokemon)

  function searchPokemon() {
    pokemonContainer.innerHTML = ""
    const inputValue = searchInput.value
    for(key in pokemonObject){
      if(key.includes(inputValue)){
        const pokemonDiv = pokemonObject[key].render()
        pokemonContainer.appendChild(pokemonDiv)
        updateFlipCardHandlers(key, pokemonObject[key])
      }
    }
  }

  function updateFlipCardHandlers(name, pokemon){
    const getFlipText = document.querySelector(`p[data-name="${name}"]`)
    const getFlipImage = document.querySelector(`img[data-name="${name}"]`)
    getFlipText.addEventListener('click', () => {
      if(getFlipImage.src === `${pokemon.imgFront}`){
        getFlipImage.src = `${pokemon.imgBack}`
      } else {
        getFlipImage.src = `${pokemon.imgFront}`
      }
    })
  }
})
