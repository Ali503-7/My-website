const characters = [...Array(26).keys()]
  .map((i) => String.fromCharCode(i + 65))
  .concat([...Array(26).keys()].map((i) => String.fromCharCode(i + 97)))
  .concat([
    "!",
    "@",
    "#",
    "$",
    "%",
    "&",
    "*",
    "?",
    "-",
    "_",
    "=",
    "+",
    "~",
    "^",
    "<",
    ">",
  ]);

const Hacker = (ref, speed) => {
  let iterations = 0;
  const interval = setInterval(() => {
    if (!ref.current) {
      clearInterval(interval);
      return;
    }

    ref.current.innerText = ref.current.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return ref.current.dataset.value[index];
        }

        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");

    if (iterations >= ref.current.dataset.value.length) clearInterval(interval);

    iterations += 1 / speed;
  }, 30);
};

export default Hacker;
