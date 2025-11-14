function saudar(nome) {
    return `Olá, ${nome}!`;
}

function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function apresentarProduto(nomeProduto, preco = 0) {
    return `Produto: ${nomeProduto} | Preço: R$ ${preco}`;
}


console.log(saudar("Ana"));  

console.log("Média:", calcularMedia(8, 7.5, 9));  

console.log(apresentarProduto("Caderno", 12.5));
console.log(apresentarProduto("Borracha"));
