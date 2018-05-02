document.addEventListener("DOMContentLoaded", function() {
  console.log(json)
  const pokemonSearchForm = document.getElementById("pokemon-search-form")
  const pokemonSearchInput = document.getElementById("pokemon-search-input")
  const pokemonParentContainer = document.getElementById("pokemon-container")

  pokemonNames = json.pokemons.map((pokemon)=>pokemon.name)
  console.log(`pokemonNames`, pokemonNames)


  createPokemonWrapperDiv()

  function createPokemonWrapperDiv(){
    const pokemonWrapperDiv = document.createElement('div')
    pokemonWrapperDiv.setAttribute('id','pokemon-wrapper-div')
    pokemonParentContainer.appendChild(pokemonWrapperDiv)
  }



  document.addEventListener('keypress', (event) => {


    if(document.getElementById('pokemon-wrapper-div')){
      pokemonParentContainer.removeChild(document.getElementById('pokemon-wrapper-div'))
      createPokemonWrapperDiv()
    }

    let pokemonWrapperDiv = document.getElementById('pokemon-wrapper-div')

    // debugger
    let search = pokemonSearchInput.value + event.key
    let searchResultPokemons = json.pokemons.filter((pokemon)=>pokemon.name.match(search))
    console.log(`search`, search)
    console.log(`searchResultPokemons`, searchResultPokemons)


    // pokemonParentContainer.removeChild(pokemonContainer);

    searchResultPokemons.forEach(function(pokemon){
      // debugger
      let pokemonContainer = createPokemonContainer(pokemon.name, pokemon.sprites.front)

      console.log(`pokemonContainer`, pokemonContainer)
      pokemonWrapperDiv.append(pokemonContainer)

    })

    // debugger
  });


})



function createPokemonContainer(pokemonName, pokemonImgUrl){
  var pokemonContainer = document.createElement('div')
  pokemonContainer.setAttribute('class', 'pokemon-container')
  console.log(`pokemonConatiner`, pokemonContainer)

  var pokemonFrame = document.createElement('div')
  pokemonFrame.setAttribute('class', 'pokemon-frame')
  pokemonFrame.setAttribute('style', 'width:230px;margin:10px;background:#fecd2f;color:#2d72fc')
  console.log(`pokemonFrame`, pokemonFrame)

  var pokemonNameHeader = document.createElement('h1')
  pokemonNameHeader.setAttribute('class', 'center-text')
  pokemonNameHeader.innerText = pokemonName
  console.log(`pokemonNameHeader`, pokemonNameHeader)

  var imgDivContainer1 = document.createElement('div')
  imgDivContainer1.setAttribute('style', 'width:239px;margin:auto')

  var imgDivContainer2 = document.createElement('div')
  imgDivContainer2.setAttribute('style', 'width:96px;margin:auto')

  var pokemonImg = document.createElement('img')
  pokemonImg.setAttribute('src', pokemonImgUrl)

  imgDivContainer2.appendChild(pokemonImg)
  imgDivContainer1.appendChild(imgDivContainer2)

  var flipPokemonP = document.createElement('p')
  flipPokemonP.setAttribute('style', 'padding:10px')
  flipPokemonP.setAttribute('class', 'center-text flip-image')
  flipPokemonP.setAttribute('data-pokename', pokemonName)
  flipPokemonP.setAttribute('data-action', 'flip-image')
  flipPokemonP.innerText = 'flip card'

  pokemonFrame.appendChild(pokemonNameHeader)
  pokemonFrame.appendChild(imgDivContainer1)
  pokemonFrame.appendChild(flipPokemonP)
  console.log(`pokemonFrame`, pokemonFrame)

  pokemonContainer.appendChild(pokemonFrame)
  console.log(`pokemonContainer`, pokemonContainer)
  // debugger

  return pokemonContainer;


}
