let count = 1;

function render() {
  let poke = document.getElementById("pokemon");
  poke.innerHTML = `<img class="pok" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`;
}

let prev = document.getElementById("prev");
let next = document.getElementById("next");
prev.onclick = function () {
  count--;
  if (count < 1) count = 649;
  render();
};

next.onclick = function () {
  count++;
  if (count > 649) count = 1;
  render();
};

render();
