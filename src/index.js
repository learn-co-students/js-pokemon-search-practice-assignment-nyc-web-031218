class Pokemon {
  constructor(name, front, back) {
    this.name = name
    this.front = front;
    this.back = back;
  }

static findPokemon(event) {
   var search = document.getElementById("pokemon-search-input").value
   const pokemoncontainer = document.querySelector("#pokemon-container div")
   pokemoncontainer.innerHTML = ""

   var matchingPokemon = Pokemon.findallPokemon(search)
   matchingPokemon.forEach((pokemon) => {
     pokemon = new Pokemon(pokemon.name, pokemon.sprites.front, pokemon.sprites.back)

     pokemoncontainer.append(pokemon.render())


   })

}

//gives an array of all the pokemon that include searh term
static findallPokemon(search) {
  return api.pokemons.filter((pokemon) => {
     return pokemon.name.includes(search)
  })
}

render() {

  const pokemoncard = document.createElement("div")
  pokemoncard.setAttribute("class", "pokemon-container")

   //always put style before class when setting attributes
  const innerdiv2a = document.createElement("div")
  innerdiv2a.setAttribute("style", "width:230px;margin:10px;background:#fecd2f;color:#2d72fc")
  innerdiv2a.setAttribute("class", "pokemon-frame")

  const innerdiv2b = document.createElement("h1")
  innerdiv2b.setAttribute("class", "center-text")
  innerdiv2b.innerText = this.name

  const innerdiv2c = document.createElement("div")
  innerdiv2c.setAttribute("style", "width:239px;margin:auto")

  const innerdiv3 = document.createElement("div")
  innerdiv3.setAttribute("style", "width:96px;margin:auto")

  const innerdiv4 = document.createElement("img")
  innerdiv4.setAttribute("src", this.front)

  const flipcard = document.createElement("p")
  flipcard.setAttribute("style", "padding:10px;")
  flipcard.setAttribute("class", "center-text flip-image")
  flipcard.setAttribute("data-pokename", this.name)
  flipcard.setAttribute("data-action", "flip-image")
  flipcard.innerText = "flip card"

  flipcard.addEventListener("click", () => {
    innerdiv4.src === this.front ? innerdiv4.src = this.back : innerdiv4.src = this.front
  })


  innerdiv3.append(innerdiv4)
  innerdiv2c.append(innerdiv3)
  pokemoncard.append(innerdiv2a, innerdiv2b, innerdiv2c, flipcard)

  return pokemoncard

  // 1 <div class="pokemon-container">
  //       2 <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
  //       2 <h1 class="center-text">beedrill</h1>
  //       2 <div style="width:239px;margin:auto">
  //         3 <div style="width:96px;margin:auto">
  //           4 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png">
  //          </div>
  //       </div>
  //       2<p style="padding:10px;" class="center-text flip-image" data-pokename="beedrill" data-action="flip-image">flip card</p>
  //       </div>
  //   </div>

}

}

document.addEventListener("DOMContentLoaded", function() {

   var pokemonsearch = document.getElementById("pokemon-search-input")
   pokemonsearch.addEventListener('keydown', Pokemon.findPokemon)


})
