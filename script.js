let boardGenerated = false;

let sizeButton = document.querySelector('.sizeButton');
sizeButton.addEventListener('click', buttonPress);

let boardContainer = document.querySelector('.boardContainer');

function generateBoard(sideLength) {
    let board = document.createElement('div');
    board.classList.add('board');
    for (let i = 0; i < sideLength; i++) {
        let container = document.createElement('div');
        container.classList.add('container');
        for (let j = 0; j < sideLength; j++) {
            let square = document.createElement('div');
            square.classList.add('off');
            square.classList.add('on');
            square.classList.toggle('on');
            square.addEventListener('mouseover', mouseIn);
            container.appendChild(square);
        }
        board.appendChild(container);
    }
    boardContainer.appendChild(board);
}

function mouseIn(e) {
    e.target.classList.toggle('off');
    e.target.classList.toggle('on');
}

function buttonPress(e) {
    let sideLength = 0;
    while (true) {
        sideLength = prompt("Side length?");
        if (isNaN(sideLength)) {
            break;
        }
        if (sideLength > 0) {
            break;
        }
        alert("Give number greater than 0");
    }
    if (isNaN(sideLength)) {
        return;
    }

    if (sideLength > 100) {
        sideLength = 100;
    }
    if (boardGenerated) {
        let board = document.querySelector('.board');
        board.remove();
        boardGenerated = false;
    }
    generateBoard(sideLength);
    boardGenerated = true;
}

function random255() {
    return Math.floor(Math.random() * 256);
}

