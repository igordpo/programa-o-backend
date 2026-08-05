const Livro = require("./Livro"); 

const livro1 = new Livro("Clean Code", "Robert C. Martin", 89.9, 12);
const livro2 = new Livro("O Pequeno Príncipe", "Saint-Exupéry", 34.9, 5);

// console.log(livro1.titulo);
// console.log(livro2.titulo);

// livro1.descrever();
// const valor = livro1.valorEmEstoque();
// console.log("Valor total em estoque: R$ " + valor);

// console.log(livro1.preco);
// console.log(livro1.estoque);
// console.log(livro2.preco);
// console.log(livro2.estoque);

livro1.preco = 99.9; // válido → aceita
console.log(livro1.preco);
livro1.preco = 50; // inválido → recusa
console.log(livro1.preco);



