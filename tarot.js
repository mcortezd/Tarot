const fs = require('fs');
const readline = require('readline');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Leitura do arquivo JSON
const cartasTarotJSON = fs.readFileSync('cartas_tarot.json');
const tarotDeck = JSON.parse(cartasTarotJSON);

function escolherCarta() {
  const indiceCarta = getRandomNumber(0, tarotDeck.length - 1);
  return tarotDeck[indiceCarta];
}

function interpretarCarta(carta) {
  console.log(`A carta escolhida é: ${carta.nome}`);
  console.log(`Interpretação: ${carta.interpretacao}`);
  console.log(`Profissional: ${carta.profissional}`);
  console.log(`Saúde: ${carta.saude}`);
  console.log(`Amor: ${carta.amor}`);
  console.log(`Combinação: ${carta.combinacao}`);
  console.log(`Conselho: ${carta.conselho}`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Pressione Enter para obter uma leitura de tarot...', () => {
  const cartaEscolhida = escolherCarta();
  interpretarCarta(cartaEscolhida);
  rl.close();
});
