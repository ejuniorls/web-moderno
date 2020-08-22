// funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(4)
imprimirSoma(2, 3, 4, 5, 6, 7, 8)

// funcao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(5, 4))
console.log(soma(5))