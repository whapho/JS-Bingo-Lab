// Table Creation
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

var numbers = [];
for (var i = 1; i <= 90; i++) {
    numbers.push(i);
}

shuffleArray(numbers);

var table = document.getElementById("bingo-board");

for (var i = 0; i < 5; i++) {
    var row = table.insertRow(i);
    for (var j = 0; j < 5; j++) {
        var cell = row.insertCell(j);
        if (i == 2 && j == 2) {
            cell.textContent = "Free";
            cell.style.fontSize = "28px";
        } else {
            cell.textContent = numbers[i * 5 + j];
        }
        cell.addEventListener('click', function () {
            this.classList.toggle('bingo');
            checkForBingoWithDelay();
        });
    }
}

// Check for bingo
function checkForBingo() {
    var rows = table.rows;
    var columns = [];
    for (var j = 0; j < 5; j++) {
        var column = [];
        for (var i = 0; i < 5; i++) {
            column.push(rows[i].cells[j]);
        }
        columns.push(column);
    }

    for (var i = 0; i < 5; i++) {
        if (rows[i].querySelectorAll('.bingo').length === 5) {
            alert("Bingo!");
        } else if (columns[i].every(cell => cell.classList.contains('bingo'))) {
            alert("Bingo!");
        }
    }

    if (rows[0].cells[0].classList.contains('bingo') &&
        rows[1].cells[1].classList.contains('bingo') &&
        rows[2].cells[2].classList.contains('bingo') &&
        rows[3].cells[3].classList.contains('bingo') &&
        rows[4].cells[4].classList.contains('bingo')) {
        alert("Bingo!");
    } else if (rows[0].cells[4].classList.contains('bingo') &&
        rows[1].cells[3].classList.contains('bingo') &&
        rows[2].cells[2].classList.contains('bingo') &&
        rows[3].cells[1].classList.contains('bingo') &&
        rows[4].cells[0].classList.contains('bingo')) {
        alert("Bingo!");
    }
}

function checkForBingoWithDelay() {
    setTimeout(function () {
        checkForBingo();
    }, 10);
}

// New game button
var newGameButton = document.getElementById("new-game");
newGameButton.addEventListener('click', function () {
    location.reload();
});