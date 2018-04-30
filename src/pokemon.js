class Pokemon {
  constructor(json_hash) {
    this.name = json_hash["name"]
    this.imgFront = json_hash["sprites"]["front"]
    this.imgBack = json_hash["sprites"]["back"]
  }

  render() {
    const pokemonDiv = document.createElement('div')
    pokemonDiv.innerHTML = `<div class="pokemon-container center-text">
    <h2>${this.name}</h2>
    <br/>
    <img data-name="${this.name}" src="${this.imgFront}">
    <br/>
    <p data-name="${this.name}" class="flip-image">flip card</p>
    </div>`
    return pokemonDiv
  }
}
