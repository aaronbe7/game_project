/*----- constants -----*/

const slotOptions = {
    coin: 'imgs/number_1.png',
    dollar: 'imgs/number_2.png',
    seven: 'imgs/number_3.png',
    key: 'imgs/number_4.png',
}

/*----- app's state (variables) -----*/

let slots;
let bank;
let winner;
let result;

/*----- cached element references -----*/

const slotEls = {
    slot_1: document.querySelector('#slot1-result img'),
    slot_2: document.querySelector('#slot2-result img'),
    slot_3: document.querySelector('#slot3-result img'),
    slot_4: document.querySelector('#slot4-result img'),
}

const bankEl = document.getElementById('bank');

const resultEl = document.getElementById('winLose');


/*----- event listeners -----*/

document.querySelector('button').addEventListener('click', playGame);

init();

function init(){
    slots = {
        slot_1: "seven",
        slot_2: "seven",
        slot_3: "seven",
        slot_4: "seven",
    }
    
    bank = 0;
    result = 'RESULTS';
    winner = null;

    render();
}

function render(){

    bankEl.innerText = '$' + bank;
    resultEl.innerText = result;

    if (result === 'YOU WIN!'){
        resultEl.style.backgroundColor = '#C7FFDE';
    } else if (result === 'YOU LOSE!'){
        resultEl.style.backgroundColor = '#FFD1D1';
    } else {
        resultEl.style.backgroundColor = 'white';

    }

    if (bank >= 0){
        bankEl.style.color = 'green';
        bankEl.style.backgroundColor = '#C7FFDE';
    } else {
        bankEl.style.color = 'red';
        bankEl.style.backgroundColor = '#FFD1D1';
    }

    for (let slot in slots){
        slotEls[slot].src = slotOptions[slots[slot]];
    }
}

function playGame(){
    slots.slot_1 = getRandomSlot();
    slots.slot_2 = getRandomSlot();
    slots.slot_3 = getRandomSlot();
    slots.slot_4 = getRandomSlot();

    if((slots.slot_1 === slots.slot_2 ) && (slots.slot_2 === slots.slot_3)) {
       winner = true;
    } else if ((slots.slot_2 === slots.slot_3) && (slots.slot_3 === slots.slot_4)) {
       winner = true;
    } else if ((slots.slot_1 === slots.slot_3) && (slots.slot_3 === slots.slot_4)) {
       winner = true;
    } else if ((slots.slot_1 === slots.slot_2) && (slots.slot_2 === slots.slot_4)) {
       winner = true;
    } else if ((slots.slot_1 === slots.slot_2) && (slots.slot_2 === slots.slot_3) && (slots.slot_3 === slots.slot_4)) {
       winner = true;
    } else {
       winner = false;
    }

    if (winner === true){
        bank = bank + 300;
        result = 'YOU WIN!';
    } else {
        bank = bank - 100;
        result = 'YOU LOSE!';
    }

    render();
}

function getRandomSlot(){
    const option = ['coin', 'dollar', 'seven', 'key'];
    const randomIndex = Math.floor(Math.random() * 4)

    return option[randomIndex]
}

