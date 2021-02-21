

let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;
let scorX = 0
let scorO = 0




// contador de jogadas//

let player1 = 0;
let player2 = 0;

// saber quem vai jogar//

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        secondPlayer = buttons[i].getAttribute('id')


        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none'
        }

        let container = document.querySelector('#container')

        setTimeout(() => {
            container.classList.remove('hide')
        }, 500)

    }

    )
}

// adicionando evento de clique nos box//

for (let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click", function () {


        try {

            let el = checkEl(player1, player2);

            if (this.childNodes.length == 1) {


                let cloneEl = el.cloneNode(true);

                this.appendChild(cloneEl);

                //computar jogada
                if (player1 == player2) {

                    player1++;

                    if (secondPlayer == 'ia-player') {
                        
                        computerPlayer()

                        player2++;

                    }
                } else {
                    player2++;
                }

                //checa quem venceu
                checarQuemVenceu();

            }




        } catch (error) {
        }

    }
    )
}

// lógica da jogada da máquina
function computerPlayer() {

    let circle = o.cloneNode(true)

    let counter = 0

    let filled = 0

    for (let i = 0; i < boxes.length; i++) {

        let roundNumber = Math.floor(Math.random() * 5)

        if (boxes[i].childNodes[1] == undefined) {
            if (roundNumber < 1) {
                boxes[i].appendChild(circle)
                counter++
                break
            }
        } else {
            filled++
        }

    }

    if (counter == 0 && filled < 9) {
        computerPlayer()
    }

}

function checkEl(player1, player2) {
    if (player1 == player2) {
        //x
        el = x;
    } else {
        //o
        el = o;
    }
    return el;
}

// function checar vencedor
function checarQuemVenceu() {

    let b1 = document.getElementById("bloco-1");
    let b2 = document.getElementById("bloco-2");
    let b3 = document.getElementById("bloco-3");
    let b4 = document.getElementById("bloco-4");
    let b5 = document.getElementById("bloco-5");
    let b6 = document.getElementById("bloco-6");
    let b7 = document.getElementById("bloco-7");
    let b8 = document.getElementById("bloco-8");
    let b9 = document.getElementById("bloco-9");

    //horizontal 1
    if (b1.childNodes.length > 1 && b2.childNodes.length > 1 && b3.childNodes.length > 1) {

        let b1Child = b1.childNodes[1].className;
        let b2Child = b2.childNodes[1].className;
        let b3Child = b3.childNodes[1].className;



        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            // x venceu
            scorX++

            messageText.innerHTML = 'O player 1 é o vencedor'

            document.querySelector('#message').classList.remove('hide')


            updateScore()


            setTimeout(reload, 3000)



        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            // o venceu
            scorO++

            messageText.innerHTML = 'O player 2 é o vencedor'

            document.querySelector('#message').classList.remove('hide')


            updateScore()


            setTimeout(reload, 3000)
        }
    }

    //horizontal 2
    if (b4.childNodes.length > 1 && b5.childNodes.length > 1 && b6.childNodes.length > 1) {

        let b4Child = b4.childNodes[1].className;
        let b5Child = b5.childNodes[1].className;
        let b6Child = b6.childNodes[1].className;



        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            // x venceu
            // x venceu
            scorX++

            messageText.innerHTML = 'O player 1 é o vencedor'

            document.querySelector('#message').classList.remove('hide')

            updateScore()


            setTimeout(reload, 3000)
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            // o venceu
            scorO++

            messageText.innerHTML = 'O player 2 é o vencedor'

            document.querySelector('#message').classList.remove('hide')


            updateScore()


            setTimeout(reload, 3000)
        }
    }

    //horizontal 3
    if (b7.childNodes.length > 1 && b8.childNodes.length > 1 && b9.childNodes.length > 1) {

        let b7Child = b7.childNodes[1].className;
        let b8Child = b8.childNodes[1].className;
        let b9Child = b9.childNodes[1].className;



        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            // x venceu
            scorX++

            messageText.innerHTML = 'O player 1 é o vencedor'

            document.querySelector('#message').classList.remove('hide')

            updateScore()


            setTimeout(reload, 3000)
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            // o venceu
            scorO++

            messageText.innerHTML = 'O player 2 é o vencedor'

            document.querySelector('#message').classList.remove('hide')


            updateScore()


            setTimeout(reload, 3000)
        }
    }

    //vertical 1
    if (b1.childNodes.length > 1 && b4.childNodes.length > 1 && b7.childNodes.length > 1) {

        let b1Child = b1.childNodes[1].className;
        let b4Child = b4.childNodes[1].className;
        let b7Child = b7.childNodes[1].className;



        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            // x venceu
            scorX++

            messageText.innerHTML = 'O player 1 é o vencedor'

            document.querySelector('#message').classList.remove('hide')

            updateScore()


            setTimeout(reload, 3000)
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            // o venceu
            scorO++

            messageText.innerHTML = 'O player 2 é o vencedor'

            document.querySelector('#message').classList.remove('hide')


            updateScore()


            setTimeout(reload, 3000)
        }
    }

    //vertical 2
    if (b2.childNodes.length > 1 && b5.childNodes.length > 1 && b8.childNodes.length > 1) {

        let b2Child = b2.childNodes[1].className;
        let b5Child = b5.childNodes[1].className;
        let b8Child = b8.childNodes[1].className;



        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            // x venceu
            scorX++

            messageText.innerHTML = 'O player 1 é o vencedor'

            document.querySelector('#message').classList.remove('hide')

            updateScore()


            setTimeout(reload, 3000)
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            // o venceu
            scorO++

            messageText.innerHTML = 'O player 2 é o vencedor'

            document.querySelector('#message').classList.remove('hide')


            updateScore()


            setTimeout(reload, 3000)
        }
    }

    //vertical 3
    if (b3.childNodes.length > 1 && b6.childNodes.length > 1 && b9.childNodes.length > 1) {

        let b3Child = b3.childNodes[1].className;
        let b6Child = b6.childNodes[1].className;
        let b9Child = b9.childNodes[1].className;



        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            // x venceu
            scorX++

            messageText.innerHTML = 'O player 1 é o vencedor'

            document.querySelector('#message').classList.remove('hide')

            updateScore()


            setTimeout(reload, 3000)
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            // o venceu
            scorO++

            messageText.innerHTML = 'O player 2 é o vencedor'

            document.querySelector('#message').classList.remove('hide')


            updateScore()


            setTimeout(reload, 3000)
        }
    }

    //diagonal 1
    if (b1.childNodes.length > 1 && b5.childNodes.length > 1 && b9.childNodes.length > 1) {

        let b1Child = b1.childNodes[1].className;
        let b5Child = b5.childNodes[1].className;
        let b9Child = b9.childNodes[1].className;



        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            // x venceu
            scorX++

            messageText.innerHTML = 'O player 1 é o vencedor'

            document.querySelector('#message').classList.remove('hide')

            updateScore()


            setTimeout(reload, 3000)
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            // o venceu
            scorO++

            messageText.innerHTML = 'O player 2 é o vencedor'

            document.querySelector('#message').classList.remove('hide')


            updateScore()


            setTimeout(reload, 3000)
        }
    }

    //diagonal 2
    if (b3.childNodes.length > 1 && b5.childNodes.length > 1 && b7.childNodes.length > 1) {

        let b3Child = b3.childNodes[1].className;
        let b5Child = b5.childNodes[1].className;
        let b7Child = b7.childNodes[1].className;



        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            // x venceu
            scorX++

            messageText.innerHTML = 'O player 1 é o vencedor'

            document.querySelector('#message').classList.remove('hide')

            updateScore()


            setTimeout(reload, 3000)
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            // o venceu
            scorO++

            messageText.innerHTML = 'O player 2 é o vencedor'

            document.querySelector('#message').classList.remove('hide')


            updateScore()


            setTimeout(reload, 3000)

        }
    }

    // deu velha
    let contador = 0

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[1] != undefined) {
            contador++
        }
    }

    if (contador == 9) {
        messageText.innerHTML = 'Deu Velha'

        document.querySelector('#message').classList.remove('hide')


        updateScore()


        setTimeout(reload, 3000)
    }
}

function updateScore() {
    document.querySelector('#scoreboardX').innerHTML = scorX
    document.querySelector('#scoreboardO').innerHTML = scorO
}

function reload() {
    let removeBoxe = document.querySelectorAll('.box div')
    for (let i = 0; i < removeBoxe.length; i++) {
        removeBoxe[i].parentNode.removeChild(removeBoxe[i])
        document.querySelector('#message').classList.add('hide')
    }
    player1 = 0
    player2 = 0
}