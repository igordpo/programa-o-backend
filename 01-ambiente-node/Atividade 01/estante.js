// ===== LIVRO 1 =====
const livro1 = {
titulo: "Clean Code",
autor: "Robert C. Martin",
preco: 89.9,
estoque: 12,
};
// ===== LIVRO 2 — TROQUE os quatro valores abaixo =====
const livro2 = {
    titulo: "TROQUE pelo título do seu livro",
    autor: "TROQUE pelo nome do autor",
    preco: 50,
    estoque: 5,
};
console.log("-----------------------------------");

const livro3 = {
    titulo: "Enchente",
    autor: "Robert C. Martin",
    preco: 55.9,
    estoque: 20,
};
// Esta linha entrega os dois livros para os outros arquivos usarem
module.exports = { livro1, livro2,livro3 };