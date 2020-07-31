
var machineOrder = [];
var playerOrder = [];
var round=0;
var random;
var play=0;
var go;
var activeOption = 1;
var activeDifficulty = 1;

// режим игры 

function checkType(item) {
    if (item.value == "normal") {
        activeOption = 1;
    }
    else if (item.value == "sound-only") {
        activeOption = 2;
    }
    else if (item.value == "light-only") {
        activeOption = 3;
    }
    else if (item.value == "free-board") {
        activeOption = 4;
    }

    if (item.value == "easy") {
        activeDifficulty = 1;
    }
    else if (item.value == "normal") {
        activeDifficulty = 2;
    }
    else if (item.value == "hard") {
        activeDifficulty = 3;
    }
}

// начало игры

function start() {
    machineOrder = [];
    playerOrder = [];
    play = 1;
    round = 1;
    go = 0;

    document.getElementById("round").textContent = round;
    document.getElementById("sorry").textContent = "";
    computer();  
}



function computer() {
    if (go < round) {
        if (activeDifficulty == 1) {
            setTimeout(randomInteger, 1500);
        }
        else if (activeDifficulty == 2) {
            setTimeout(randomInteger, 1000);
        }
        else if (activeDifficulty == 3) {
            setTimeout(randomInteger, 400);
        }

        go++;
        var elemen = document.getElementsByClassName('tile');
        for(i=0; i < elemen.length; i++) {   
            elemen[i].style.cursor = 'unset';   
        }
    }
    else {
        var elemen = document.getElementsByClassName('tile');
        for(i=0; i < elemen.length; i++) {    
            elemen[i].style.cursor = 'pointer';
        } 
    }     
}

// случайное число от 1 до 4

function randomInteger() {
    let rand = 1 + Math.random() * 4;
    random = Math.floor(rand);
    machineOrder.push(random);

    //активация случайной кнопки 

    if (activeOption == 1 || activeOption == 4) {
        activation()
    }
    else if (activeOption == 2) {
        activationSound()
    }
    else if (activeOption == 3) {
        activationLight()
    }
}

// действия программы в зависимости от режима
function activation() {
    if (random == 1) {
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = '../sounds/1.mp3'; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем
        document.getElementById('red').style.background = 'red';
        setTimeout(returnColor, 200);        
    }
    else if (random == 2) {
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = '../sounds/2.mp3'; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем
        document.getElementById('blue').style.background = 'blue';
        setTimeout(returnColor, 200);
    }
    else if (random == 3) {
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = '../sounds/3.mp3'; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем
        document.getElementById('yellow').style.background = 'orange';
        setTimeout(returnColor, 200);
    }
    else if (random == 4) {
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = '../sounds/4.mp3'; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем
        document.getElementById('green').style.background = 'green';
        setTimeout(returnColor, 200);
    }
}

function activationLight() {
    if (random == 1) {
        document.getElementById('red').style.background = 'red';
        setTimeout(returnColor, 200);        
    }
    else if (random == 2) {
        document.getElementById('blue').style.background = 'blue';
        setTimeout(returnColor, 200);
    }
    else if (random == 3) {
        document.getElementById('yellow').style.background = 'orange';
        setTimeout(returnColor, 200);
    }
    else if (random == 4) {
        document.getElementById('green').style.background = 'green';
        setTimeout(returnColor, 200);
    }
}

function activationSound() {
    if (random == 1) {
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = '../sounds/1.mp3'; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем   
    }
    else if (random == 2) {
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = '../sounds/2.mp3'; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем
    }
    else if (random == 3) {
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = '../sounds/3.mp3'; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем
    }
    else if (random == 4) {
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = '../sounds/4.mp3'; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем
    }
}   



//затухание кнопок

function returnColor() {
    if (random == 1) {
        document.getElementById('red').style.background = '#FF5643';
        computer();
    }
    else if (random == 2) {
        document.getElementById('blue').style.background = 'dodgerblue';
        computer();
    }
    else if (random == 3) {
        document.getElementById('yellow').style.background = '#FEEF33';
        computer();
    }
    else if (random == 4) {
        document.getElementById('green').style.background = '#BEDE15';
        computer();
    }
}

//выбор игрока

function playerRed() {
    if (activeOption !== 4) {
        if (playerOrder.length < round && play == 1) {
            random = 1;
            playerOrder.push(1);
            var audio = new Audio(); // Создаём новый элемент Audio
            audio.src = '../sounds/1.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true; // Автоматически запускаем
            document.getElementById('red').style.background = 'red';
        }
    }
    else {
        if (play == 1) {
            random = 1;
            playerOrder.push(1);
            var audio = new Audio(); // Создаём новый элемент Audio
            audio.src = '../sounds/1.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true; // Автоматически запускаем
            document.getElementById('red').style.background = 'red';  
        }
    }
}

function playerBlue() {
    if (activeOption !== 4) {
        if (playerOrder.length < round && play == 1) {
            random = 2;
            playerOrder.push(2);
            var audio = new Audio(); // Создаём новый элемент Audio
            audio.src = '../sounds/2.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true; // Автоматически запускаем
            document.getElementById('blue').style.background = 'blue';  
        }
    }
    else {
        if (play == 1) {
            random = 2;
            playerOrder.push(2);
            var audio = new Audio(); // Создаём новый элемент Audio
            audio.src = '../sounds/2.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true; // Автоматически запускаем
            document.getElementById('blue').style.background = 'blue';
        }
    }   
}

function playerYellow() {
    if (activeOption !== 4) {
        if (playerOrder.length < round && play == 1) {
            random = 3;
            playerOrder.push(3);
            var audio = new Audio(); // Создаём новый элемент Audio
            audio.src = '../sounds/3.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true; // Автоматически запускаем
            document.getElementById('yellow').style.background = 'orange';  
        }
    }
    else {
        if (play == 1) {
            random = 3;
            playerOrder.push(3);
            var audio = new Audio(); // Создаём новый элемент Audio
            audio.src = '../sounds/3.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true; // Автоматически запускаем
            document.getElementById('yellow').style.background = 'orange';
        }
    }
}

function playerGreen() {
    if (activeOption !== 4) {
        if (playerOrder.length < round && play == 1) {
            random = 4;
            playerOrder.push(4);
            var audio = new Audio(); // Создаём новый элемент Audio
            audio.src = '../sounds/4.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true; // Автоматически запускаем
            document.getElementById('green').style.background = 'green';
        }
    }
    else {
        if (play == 1) {
            random = 4;
            playerOrder.push(4);
            var audio = new Audio(); // Создаём новый элемент Audio
            audio.src = '../sounds/4.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true; // Автоматически запускаем
            document.getElementById('green').style.background = 'green';    
        }
    }
}

function mousePlayer() {
    if (play == 1) {
        returnColor();
        endOfRound();
    }
}

// конец раунда?

function endOfRound() {
    document.getElementById('red').style.background = '#FF5643';
    document.getElementById('blue').style.background = 'dodgerblue';
    document.getElementById('yellow').style.background = '#FEEF33';
    document.getElementById('green').style.background = '#BEDE15';

    if (playerOrder[playerOrder.length-1] !== machineOrder[playerOrder.length-1]) {
        if (activeOption !== 4) {
            play = 0;
            end ();  
        }
        else {
            round = 0;
            document.getElementById("sorry").textContent = "Sorry, you lost after "+ round +" rounds!";
            document.getElementById("round").textContent = round;
        }  
    }
    else if (playerOrder.length == machineOrder.length) {
        round++;
        document.getElementById("round").textContent = round;
        machineOrder = [];
        playerOrder = [];
        play = 1;
        go = 0;

        computer();  
    }
   
}

// конец игры

function end() {
    document.getElementById("sorry").textContent = "Sorry, you lost after "+ round +" rounds!";
    var elemen = document.getElementsByClassName('tile');
    for(i=0; i < elemen.length; i++) {   
        elemen[i].style.cursor = 'unset';   
    }
    machineOrder = [];
    playerOrder = [];
    round = 0;
    random = 0;
    
}