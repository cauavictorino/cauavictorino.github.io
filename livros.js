const livro = {
    titulo: "O Guia do Mochileiro das Galáxias",
    autor: "Douglas Adams",
    paginas: 224,
    disponivel: true
};

console.log("--- Acesso às Propriedades ---");
console.log(`Título (Notação de Ponto): ${livro.titulo}`);
console.log(`Autor (Notação de Colchetes): ${livro['autor']}`);
console.log("----------------------------");

livro.editora = "Arqueiro";
console.log(`Nova Propriedade Editora Adicionada: ${livro.editora}`);
console.log("----------------------------");

livro.detalhes = function() {
    const status = this.disponivel ? "está disponível" : "não está disponível";
    return `${this.titulo}, escrito por ${this.autor} e publicado pela ${this.editora}, tem ${this.paginas} páginas e ${status}.`;
};

console.log("--- Detalhes do Livro ---");
console.log(livro.detalhes());
console.log("----------------------------");

const biblioteca = {
    nome: "Biblioteca Central",
    catalogo: [
        livro,
        {
            titulo: "1984",
            autor: "George Orwell",
            paginas: 328,
            disponivel: false,
            editora: "Companhia das Letras",
            detalhes: function() {
                const status = this.disponivel ? "está disponível" : "não está disponível";
                return `${this.titulo}, escrito por ${this.autor} e publicado pela ${this.editora}, tem ${this.paginas} páginas e ${status}.`;
            }
        }
    ]
};

console.log("--- Objeto Biblioteca ---");
console.log(biblioteca);
console.log(`Total de Livros no Catálogo: ${biblioteca.catalogo.length}`);
console.log("----------------------------");