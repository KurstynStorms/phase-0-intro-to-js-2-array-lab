// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name = 'Ralph')
}

function destructivelyPrependCat(name){
    cats.unshift(name = 'Bob')
}

function destructivelyRemoveLastCat(name){
    cats.pop(name = 'Garfield')
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name = 'Milo')
}

function appendCat(name){
    return [...cats, 'Broom']
}
function prependCat(name){
    return ['Arnold', ...cats]
}

function removeLastCat () {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat () {
    return cats.slice(1)
}
