
let nota = 68;

if (nota >= 70) {
    console.log("Aprovado");
} else if (nota >= 50 && nota < 70) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

let mes = 4;
let nomeMes;

switch (mes) {
    case 1:
        nomeMes = "Janeiro";
        break;
    case 2:
        nomeMes = "Fevereiro";
        break;
    case 3:
        nomeMes = "Março";
        break;
    case 4:
        nomeMes = "Abril";
        break;
    case 5:
        nomeMes = "Maio";
        break;
    case 6:
        nomeMes = "Junho";
        break;
    case 7:
        nomeMes = "Julho";
        break;
    case 8:
        nomeMes = "Agosto";
        break;
    case 9:
        nomeMes = "Setembro";
        break;
    case 10:
        nomeMes = "Outubro";
        break;
    case 11:
        nomeMes = "Novembro";
        break;
    case 12:
        nomeMes = "Dezembro";
        break;
    default:
        nomeMes = "Mês inválido";
}

console.log("Mês:", nomeMes);

let i = 0;
console.log("Números pares de 0 a 20:");
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

let cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Fortaleza"];

console.log("Lista de cidades:");
for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i]);
}

console.log("Números de 10 a 1:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
