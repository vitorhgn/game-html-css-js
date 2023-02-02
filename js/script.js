const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const score = document.querySelector('.score');
var count = 0
const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
    const cloudsPosition = clouds.offsetLeft


        if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80){
    
            setTimeout(() =>{
                 if(confirm(text = `Você perdeu sua pontuação foi de ${count}, atualize a página e tente novamente.`) == true){
                    return location.reload()
                 }
            }, 100)
            
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            clouds.style.animation = 'none';
            clouds.style.left = `${cloudsPosition}px`;

            mario.src = './images/game-over.png';
            mario.style.width = '70px';
            mario.style.marginLeft = '60px'
            
            
            clearInterval(loop);

        }   
        count++; 
        score.innerHTML = `SCORE: ${count}`;
    }, 100)
    

document.addEventListener('keydown', (e) => {
    if ((e.code === "ArrowUp") | (e.code === "Space")){
        jump();
    }
});