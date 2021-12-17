let sideLenght = prompt('How big should the square be?', 24);
while (isNaN(sideLenght)) {
    alert('You did not insert a number, please try again');
    sideLenght = prompt('How big should the square be?', 24);
}
while (sideLenght>100) {
    alert('Please put a number <= 100');
    sideLenght = prompt('How big should the square be?', 24);
}

let hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
let randomColor = '#';

function pickColor() {
    for (i=0; i<6; i++) {
        let value = Math.random()*16;
        let valueInt = Math.floor(value);
        randomColor += hexArray[valueInt];
    }
    return(randomColor);
}


let mode = 'bw';
document.querySelector('#BW').addEventListener('click', function() {
    mode = 'bw';
})
document.querySelector('#RGB').addEventListener('click', function() {
    mode = 'RGB';
})
document.querySelector('#shaded').addEventListener('click', function() {
    mode = 'shaded';
})
document.querySelector('#reset').addEventListener('click', function() {
    location.reload();
})

function createRow() {
    let row = document.createElement('div');
    row.classList.add('row');
    document.getElementById('container').appendChild(row);
    for (i=0; i<sideLenght; i++){
        createSquare();
    }
}

let opacity = 0.1;

function createSquare() {
    let square = document.createElement('div');
    square.classList.add('square');
    let allRow = document.querySelectorAll('.row');
    allRow.forEach((newRow) => {
        newRow.appendChild(square);
    });
    square.addEventListener('mouseover', function(){
    if (mode == 'bw') {
        square.style.opacity = 1;
        square.style.backgroundColor = '';
        square.classList.remove('shaded');
        square.classList.add('black');
    } else if (mode == 'RGB') {
        square.style.opacity = 1;
        square.style.backgroundColor = '';
        square.classList.remove('black');
        square.classList.remove('shaded');
        square.style.backgroundColor = pickColor();
        randomColor = '#'
    } else if (mode == 'shaded') {
        square.style.backgroundColor = '';
        square.classList.remove('black');
        square.style.backgroundColor = 'black';
        let opacity = Number(square.style.opacity);
        square.style.opacity = opacity >= 1 ? "1" : opacity + 0.1 + "";
    }

})
}

function createGrid() {
    for (m=0; m<sideLenght; m++){
        createRow();
    }
}

createGrid();