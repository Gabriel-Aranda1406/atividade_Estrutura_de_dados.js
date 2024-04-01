const readline = require('readline-sync');

class Livro {
    constructor(nome) {
        this.nome = nome;
    }
}

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    listarLivros() {
        return this.items.map(livro => livro.nome);
    }
}

const pilhaLivros = new Stack();

function adicionarLivro() {
    const nomeLivro = readline.question('Digite o nome do livro:');
    const livro = new Livro(nomeLivro);
    pilhaLivros.push(livro);
    console.log('Livro adicionado à pilha.');
}

function listarLivros() {
    const livros = pilhaLivros.listarLivros();
    console.log('Livros na pilha:');
    livros.forEach(livro => console.log(livro));
}

function retirarLivro() {
    const livroRetirado = pilhaLivros.pop();
    if (livroRetirado) {
        console.log(`Livro "${livroRetirado.nome}" retirado da pilha.`);
    } else {
        console.log('Pilha está vazia.');
    }
}

function menu() {
    while (true) {
        console.log('****************'); 
        const opcao = readline.questionInt('Menu:\n1: Adicionar Livro\n2: Listar Livros\n3: Retirar Livro\n0: Sair\n');

        switch (opcao) {
            case 0:
                console.log('Programa finalizado.');
                process.exit(); 
                break;
            case 1:
                adicionarLivro();
                break;
            case 2:
                listarLivros();
                break;
            case 3:
                retirarLivro();
                break;
            default:
                console.log('Opção inválida.');
        }
    }
}

menu();
