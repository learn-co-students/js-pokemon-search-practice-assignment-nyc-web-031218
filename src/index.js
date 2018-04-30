
// const container = document.getElementById('')
const pokemon = pokemonData["pokemons"]

document.addEventListener("DOMContentLoaded", function() {


    pokemon.forEach(function(element){
      const container = document.createElement("div")
      const centerText = document.createElement("h1")
      const imageTag = document.createElement('img')
      const flipText = document.createElement("p")

      imageTag.className = "pokemonImg"

      document.body.appendChild(container)
      container.id = element["name"]
      container.className = "pokemon-container"
      container.appendChild(centerText)
      container.appendChild(imageTag)
      container.appendChild(flipText)
      container.style.display = "none"


      let flipped = false

      imageTag.src = element['sprites']['front']
      flipText.className = "flip-image"
      flipText.innerText = "flip card"
      flipText.addEventListener('click', function(){
        if (flipped) {
          imageTag.src = element['sprites']['front']
          flipped = !flipped
        }
        else {
          imageTag.src = element['sprites']['back']
          flipped = !flipped
        }
      })


      centerText.className = "center-text"
      centerText.innerText = element["name"]


    })


    let searchInput = document.getElementById('pokemon-search-input')
    searchInput.addEventListener('input', e => {

      let pokemonElements = document.querySelectorAll('.pokemon-container')
      pokemonElements.forEach(el => {el.style.display = 'none'})
      pokemonElements.forEach(el => {
        if (el.id.match(`${searchInput.value}`)) {
          el.style.display = 'block'
        }
      })
      })

})
