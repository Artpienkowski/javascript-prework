var argButtonName; 
var playerWinsCount = 0;
var npcWinsCount = 0;

const buttonKamien = document.getElementById('button-rock');
const buttonPapier = document.getElementById('button-paper');
const buttonNozyce = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
  clearMessages();
  clearResult();
  console.log(argButtonName + ' został kliknięty');

  var computerMove, playerMove, randomNumber;

    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
            return 'kamień';
        }
    }

    function displayResult(argPlayerMove, argComputerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
        if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
            playerWinsCount = playerWinsCount + 1;
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
            playerWinsCount = playerWinsCount + 1;
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
            playerWinsCount = playerWinsCount + 1;
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == argComputerMove) {
            printMessage('Remis');
        } else {
            npcWinsCount = npcWinsCount + 1;
            printMessage('Przegrywasz :(');
        }
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        printResult('Wynik gracza: ' + playerWinsCount + ' Wynik komputera: ' + npcWinsCount);
    }

    
    playerMove = argButtonName;

    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}

buttonKamien.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPapier.addEventListener('click', function(){ buttonClicked('papier'); });
buttonNozyce.addEventListener('click', function(){ buttonClicked('nożyce'); });