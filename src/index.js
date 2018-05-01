document.addEventListener("DOMContentLoaded", function() {

  const pc = document.getElementById("pokemon-container")
  const input = document.querySelector('input[type="text"]')

  input.addEventListener('keyup', formInput)
  document.addEventListener('click', flipCard)



  function formInput(e) {
    let pokemonNames = data.pokemons.filter(pokemon => pokemon.name.match(e.target.value))
    pc.innerHTML = ""
    e.target.value.length === 0 ? pc.innerHTML = "" : pokemonNames.forEach((pokemon) => new Pokemon(pokemon).render())
  }

  function flipCard(e) {
    let currentName = e.path[1].childNodes[0].data
    let currentPokemon = data.pokemons.filter(pokemon => currentName === pokemon.name)

    if(currentPokemon[0].sprites.front === e.target.src){
      e.target.src = currentPokemon[0].sprites.back
    }else{
        e.target.src = currentPokemon[0].sprites.front
    }
  }

})



//if input.value === pokemon.name

// const form = document.querySelector('form')
// const input = document.querySelector('input[type="text"]')
// const pokemon = document.querySelector('p')

// function fetchLocalApi() {
//   fetch("../db.json")
//   .then(res => res.json())
//   .then(json => console.log(json))
// }

// }

// console.log(e)
// console.log(e.target)
// console.log(e.target.id)
// console.log(e.clientX);
// console.log(e.target.childNodes[0])

// input.addEventListener('keydown', formInput)
// form.addEventListener('submit', formSubmit)
//
// function formSubmit(e) {
//   e.preventDefault()
//   console.log(e);
// }
// function formInput(e) {
//   // e.preventDefault()
//   console.log(e.target.value);
//   pokemon.innerHTML = `${e.target.value}`
// }
