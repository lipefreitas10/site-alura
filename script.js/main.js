<script src="main.js"></script>

const botoes = document.querySelectorAll(".botao");
console.log(botoes);


for (let i = 0; i < botoes.length; i++) {
    console.log(i);
  }


  botoes[i].onclick = function () {};


  botoes[i].onclick = function () {
    botoes[i].classList.add("ativo");
  };


  for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
      botoes[i].classList.add("ativo");
    };
  }



  for (let j = 0; j < botoes.length; j++) {
    botoes[j].classList.remove("ativo");
  }


  const botoes = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
  };
}

const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");




botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");


botoes[j].classList.remove("ativo");
textos[j].classList.remove("ativo");



for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
      for (let j = 0; j < botoes.length; j++) {
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");
      }
  
      botoes[i].classList.add("ativo");
      textos[i].classList.add("ativo");
    };
  }


  contadores[0].textContent = calculaTempo(tempoObjetivo1);


  function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
  }

  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);





return (
  dias +
  " dias " +
  horas +
  " horas " +
  minutos +
  " minutos " +
  segundos +
  " segundos"
);
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    return (
      dias +
      " dias " +
      horas +
      " horas " +
      minutos +
      " minutos " +
      segundos +
      " segundos"
    );
  }

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
  const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
  const tempoObjetivo4 = new Date("2024-02-01T00:00:00");


  contadores[0].textContent = calculaTempo(tempoObjetivo1);
contadores[1].textContent = calculaTempo(tempoObjetivo2);
contadores[2].textContent = calculaTempo(tempoObjetivo3);
contadores[3].textContent = calculaTempo(tempoObjetivo4);

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];





contadores[0].textContent = calculaTempo(tempoObjetivo1); //Antes

contadores[0].textContent = calculaTempo(tempos[0]); // Depois




// Para cada objetivo na lista de contadores
for (let i = 0; i < contadores.length; i++) {
    //Calcular o tempo usando a função e associá-lo ao objetivo
    contadores[i].textContent = calculaTempo(tempos[i]);
  }


  function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
      contadores[i].textContent = calculaTempo(tempos[i]);
    }
  }


  function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
  }
  
  comecaCronometro();



  return (
    dias +
    " dias " +
    horas +
    " horas " +
    minutos +
    " minutos " +
    segundos +
    " segundos"
  );


  if (tempoFinal > 0) {
    return (
      dias +
      " dias " +
      horas +
      " horas " +
      minutos +
      " minutos " +
      segundos +
      " segundos"
    );
  } else {
    return "Prazo Finalizado";
  }



  
