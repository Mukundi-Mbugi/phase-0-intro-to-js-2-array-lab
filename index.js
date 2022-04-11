const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}
  
function destructivelyPrependCat(name){
    cats.unshift(name)
}
  
function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    let cats1=[...cats,name]
    return cats1
}

function prependCat(name){
    let newCatsArray2=[name,...cats]
    return newCatsArray2
}
// console.log(prependCat('Bloom'))
// console.log(cats)
function removeLastCat(){
    let newCatsArray3=cats.slice(0,-1)
    return newCatsArray3
}

function removeFirstCat(){
    let newCatsArray4=cats.slice(1)
    return newCatsArray4
}