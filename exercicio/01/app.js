let texto = document.querySelector('h1');
texto = 'Hora do Desafio';

function buttonClick() {
    console.log('O botão foi clicado!');
}

function buttonJS () {
    alert('Eu amo JS');
}

function buttonPrompt () {
    let cidade = prompt('Qual cidade você visitou?');
    alert('Estive em ' + cidade + ' e lembrei de você.');
}

function buttonSoma () {
    let numero1 = parseInt(prompt('Digite um número: '));
    let numero2 = parseInt(prompt('Digite um outro número: '));
    let soma = numero1 + numero2;
    alert('A soma dos números é: ' + soma);
}