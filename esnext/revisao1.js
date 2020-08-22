// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
// console.log(b) // da erro pois está fora do bloco {}

// template string
const produto = 'iPad'
console.log(`O produto é ${produto}`);

// destructing
const [l, e, ...tras] = "Júnior"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade, nome } = { nome: 'Júnior', idade: 26 }
console.log(nome, idade);