class Pokemon {
  constructor({height, weight, name, abilities, moves, stats, types, sprites}) {
    this.height = height
    this.weight = weight
    this.name = name
    this.abilities = abilities
    this.moves = moves
    this.stats = stats
    this.types = types
    this.sprites = sprites
  }

  render() {
    const pc = document.getElementById("pokemon-container")
    pc.innerHTML += `<h2 class="poke-card">${this.name}<br><img class="pic" src=${this.sprites.front}><br></h2>`
  }
}
