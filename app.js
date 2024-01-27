let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


mensagemInicial();

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    if (chute === numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemAcerto = `Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'Você Acertou!');
        exibirTextoNaTela('p', mensagemAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior')
    }
    tentativas++;
    limparTela();
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function exibirTextoNaTela(tag, texto) {
    let a = document.querySelector(tag);
    a.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 2.0})
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}

function limparTela() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    mensagemInicial();
    limparTela();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
}

