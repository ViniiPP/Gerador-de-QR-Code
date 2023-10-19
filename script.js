// ADICIONANDO VARIÁVEIS / PEGANDO OS VALORES DO HTML
const caixa = document.querySelector(".caixa"),
  qrInput = caixa.querySelector(".form input"),
  gerarBtn = caixa.querySelector(".form button"),
  qrImg = caixa.querySelector(".qr-code img");
let preValue; // INICIA SEM UM VALOR 

//Gerar o QR CODE
gerarBtn.addEventListener("click", () => { // QUANDO CLICADO, EXECUTA A FUNÇÃO DENTRO - GERAR QR CODE
  let qrValue = qrInput.value.trim(); // Obtém o valor de entrada e remove espaços em branco antes e dps do texto
  if (!qrValue || preValue === qrValue) return; // Verifica se n está vazio
  preValue = qrValue; // Define preValue como novo valor inserido
  gerarBtn.innerText = "Gerando..."; // Altera o botão para esse texto durante o processo de gerar
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${qrValue}&size=100x100`; // API q gera o QR CODE
  qrImg.addEventListener("load", () => { // Define a fonte da imagem 'qrImg' com a URL da API com base no valor inserido
    caixa.classList.add("active"); // Quando carrega a img, o active é adicionado a class .caixa, fazendo ser visível o qr code
    gerarBtn.innerText = "Gerar QR Code"; // Com esse active, ele troca a escrita do botão novamente
  });
});

//Libera a digitação novamente após ja ser usando, quando apagar a palavra/url ele reseta
qrInput.addEventListener("keyup", () => { // Evento de digitação adicionado a entrada, ou seja, libera para digitar novamente
  if (!qrInput.value.trim()) { // Verifica se está vazio após remover os espaços em branco
    caixa.classList.remove("active"); // Se vazio, a class active é removidada de .caixa, ocultando o QR Code visível e a prevalue é resetada
    preValue = "";
  }
});
