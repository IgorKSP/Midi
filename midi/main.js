function clicarSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null || elemento.localName != 'audio'){
        console.log('Elemento não encontrado');
    } else {
        elemento.play();
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function(){
        clicarSom(idAudio);
    }
    tecla.onkeydown = function (evento){
        console.log(evento)
        if(evento.code === 'Space' || evento.code === 'Enter' || evento.code ==="NumpadEnter"){
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}