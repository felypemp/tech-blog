/* ========== Variáveis ==========*/

const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');

const voltarInicio = document.querySelector('voltarInicio');


/* ========== Funções ==========*/
function incrementarVisualizacoes(contadorVisualizacoes, contador) {
    if (localStorage.getItem(contadorVisualizacoes)) {
      let contador = parseInt(localStorage.getItem(contadorVisualizacoes));
      contador++;
      localStorage.setItem(contadorVisualizacoes, contador);
      document.getElementById(contador).textContent = 'Visualizações: ' + contador;
    } else {
      localStorage.setItem(contadorVisualizacoes, 1);
      document.getElementById(contador).textContent = 'Visualizações: 1';
    }
  }

  function carregarContador() {
    if (localStorage.getItem('contadorVisualizacoes1')) {
      let contador = parseInt(localStorage.getItem('contadorVisualizacoes1'));
      document.getElementById('contador1').textContent = 'Visualizações: ' + contador;
    }
    if (localStorage.getItem('contadorVisualizacoes2')) {
        let contador = parseInt(localStorage.getItem('contadorVisualizacoes2'));
        document.getElementById('contador2').textContent = 'Visualizações: ' + contador;
    }
    if (localStorage.getItem('contadorVisualizacoes3')) {
        let contador = parseInt(localStorage.getItem('contadorVisualizacoes3'));
        document.getElementById('contador3').textContent = 'Visualizações: ' + contador;
    }
    if (localStorage.getItem('contadorVisualizacoes4')) {
      let contador = parseInt(localStorage.getItem('contadorVisualizacoes4'));
      document.getElementById('contador4').textContent = 'Visualizações: ' + contador;
    }

  }
  function removerClasse(elemento){
    const noticia = document.getElementById(elemento);
    if (noticia) {
      noticia.classList.remove("esconder");
    }
  }
  

  document.addEventListener("DOMContentLoaded", function () {
    removerClasse(localStorage.getItem('noticia'))
  });
  
/* ========== Eventos ==========*/

card1.addEventListener('click', () => {
    localStorage.setItem('noticia', 'noticia1')
    incrementarVisualizacoes('contadorVisualizacoes1', 'contador1');
});

card2.addEventListener('click', () => {
    localStorage.setItem('noticia', 'noticia2')
    incrementarVisualizacoes('contadorVisualizacoes2', 'contador2');
    
});

card3.addEventListener('click', () => {
    localStorage.setItem('noticia', 'noticia3')
    incrementarVisualizacoes('contadorVisualizacoes3', 'contador3');
    
});

card4.addEventListener('click', () => {
    localStorage.setItem('noticia', 'noticia4')
    incrementarVisualizacoes('contadorVisualizacoes4', 'contador4');
    
});



document.addEventListener('DOMContentLoaded', carregarContador);



