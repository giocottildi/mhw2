
// utilizzo di addEventListener e modifica dinamica di una img tramite src

function cambiaImmagine()
{
    const image = document.querySelector('.magazine a img');
    image.src = 'img/uscita1.png';
    image.removeEventListener('click', cambiaImmagine);
}

const image = document.querySelector('.magazine a img');
image.addEventListener('click', cambiaImmagine);

// Utilizzo di modifica dinamica del display + utilizzo di classList


function vediUscite(event)
{
    const uscite = event.currentTarget;
    uscite.removeEventListener('click', vediUscite);

    const chiudiUscite = document.querySelector('#nascosto');

    chiudiUscite.classList.remove('hidden');
}
const uscite = document.querySelector('.uscite a');
uscite.addEventListener('click', vediUscite);



// uso di document.createElement() + data-*

function sfida(event){
    const new_h1 = document.createElement('h1');
    new_h1.textContent = 'MPH! Non credevo avresti accettato, hai del fegato! Questo è il primo passo per diventare un detective!';
    const new_img = document.createElement('img');
    new_img.src = 'img/post_game_sh.jpg';
    const gioco = document.querySelector('#gioco button');
    gioco.innerHTML = '';
    gioco.appendChild(new_h1);
    gioco.appendChild(new_img);

    
  console.log(event.currentTarget.dataset.clicked, 'Cliccato');
  }
  const game = document.querySelector('#gioco button');
  game.addEventListener('click', sfida);
  
  


