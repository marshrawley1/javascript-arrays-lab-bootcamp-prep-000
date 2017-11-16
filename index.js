const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(Ralph) {
  kittens.push(Ralph)
  return kittens
}

function destructivelyPrependKitten(Ralph) {
  kittens.unshift(Ralph)
  return kittens
}
