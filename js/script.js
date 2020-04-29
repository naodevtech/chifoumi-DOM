let boxControls = document.querySelectorAll('button')
let screenComputer = document.getElementsByClassName('screen-computer')
let screenPlayer = document.getElementsByClassName('screen-player')
let imgPlayer = document.querySelectorAll('.imgPlayer')
let playingPlayer = document.getElementsByClassName('playing-player')
let playingComputer = document.querySelectorAll('.playing')
let imgComputer = document.getElementsByClassName('playing')
let container = document.getElementsByClassName('container')

function choiceComputer(){
    let ArraySrcComputer = ["./images/pierre.png", "./images/feuilles.png", "./images/ciseaux.png"]
    const randomImgSrc = ArraySrcComputer[Math.floor(Math.random() * ArraySrcComputer.length)];
    console.log(randomImgSrc)
    let imgSrcComputer = playingComputer[0].getAttribute('src')
    console.log('Source par défaut du screen computer : ' + imgSrcComputer)
    playingComputer[0].setAttribute('src', randomImgSrc)
    if(randomImgSrc === './images/ciseaux.png'){
        imgComputer[0].style.transform = 'scaleX(1)';
    } else{
        imgComputer[0].style.transform = 'scaleX(-1)';
    }
}

function choicePlayer(e){
    let checked = true
    let dataPlayer = this.getAttribute('data-player')
    let imgSrcPlayer = e.target.getAttribute('src')
    this.style.backgroundColor = '#E3C103'
    let winner = document.createElement('h1')
    let loser = document.createElement('h1')
    if(imgSrcPlayer === './images/ciseaux.png'){
        screenPlayer[0].style.backgroundImage = `url('${imgSrcPlayer}')`
        screenPlayer[0].style.transform = 'scaleX(-1)'
    } else {
        screenPlayer[0].style.backgroundImage = `url('${imgSrcPlayer}')`
        screenPlayer[0].style.transform = 'scaleX(1)'
    }
    choiceComputer()
    // let srcComputerCheck = playingComputer[0].getAttribute('src')
    // if(srcComputerCheck === './images/ciseaux.png' && imgSrcPlayer === './images/pierre.png'){
    //     console.log('Le joueur à gagné')
    //     winner.innerHTML = 'YOU WIN !'
    //     container[0].appendChild(winner)
    // } else {
    //     console.log('Le joueur à perdu !')
    //     loser.innerHTML = 'YOU LOSE !'
    //     container[0].appendChild(loser)
    // }
}

boxControls.forEach((box) => box.addEventListener('click', choicePlayer))