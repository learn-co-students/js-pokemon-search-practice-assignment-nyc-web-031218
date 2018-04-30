document.addEventListener("DOMContentLoaded", function() {
  pokemons["pokemons"].forEach(pokemon => new Pokemon(pokemon.name, pokemon.sprites));
  let form = document.getElementById('pokemon-search-form');
  let container = document.getElementById('pokemon-container');
  let flippers = document.getElementsByClassName('flip-card');




  form.addEventListener('keyup', function() {
    filtered = pokemon.filter(poke => poke.name.indexOf(form.lastElementChild.value) >= 0);
    if (filtered && filtered.length > 0) {
      container.innerHTML = "<div class='container-fluid'>"
      let counter = 0;
      for (const f of filtered) {

        container.innerHTML +=
          `<div class="pokemon-box" style=" display:inline-block;">
            <div style="padding-top:.2em;padding-bottom:.2em;text-align:center;width:230px;margin:10px;background:#fecd2f;color:#2d72fc" data-name="">
              <h1>${f.name}</h1>
              <img src="${f.img.front}">
              <p class="flip-card" data-name="${f.name}" data-flip="front">flip card</p>
            </div>
          </div>`;


      }
      container.innerHTML += "</div>"
      flippers = document.getElementsByClassName('flip-card');
      prepFlippers(flippers);
    }
  });


});

function prepFlippers(flippers) {
  for (const flipper of flippers) {
    flipper.addEventListener('click', function(e) {
      let poke = pokemon.find(p => p.name === this.getAttribute('data-name'))
      if (this.getAttribute('data-flip') === 'front') {
        this.previousElementSibling.setAttribute('src', poke.img.back);
        this.setAttribute('data-flip', 'back');
      } else {
        this.previousElementSibling.setAttribute('src', poke.img.front);
        this.setAttribute('data-flip', 'front');
      }

    });
  }
}

let pokemon = []

class Pokemon {

  constructor(name, img) {
    this.name = name
    this.img = img
    pokemon.push(this);
  }

  render() {
    let li = document.createElement('li');
    li.innerHTML = "";
    return li;
  }


}
