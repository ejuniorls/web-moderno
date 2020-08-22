const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar somente os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.apenasPreco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)