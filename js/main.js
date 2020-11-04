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

/*----- cached element references -----*/

const slotsEl = {
    slot_1: document.querySelector('#slot1-result img'),
    slot_2: document.querySelector('#slot2-result img'),
    slot_3: document.querySelector('#slot3-result img'),
    slot_4: document.querySelector('#slot4-result img'),
}

const bankEls = {
    money: document.getElementById('bank'),
};
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
    winner = null;

    render();
}

function render(){
    
    bankEls.money.innerText = '$' + bank;

    if (bank >= 0){
        bankEls.money.style.color = 'green';
        bankEls.money.style.backgroundColor = '#C7FFDE';
    } else {
        bankEls.money.style.color = 'red';
        bankEls.money.style.backgroundColor = '#FFD1D1';
    }

    for (let slot in slots){
        slotsEl[slot].src = slotOptions[slots[slot]];
    }

    return bank;
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
        bank = bank + 400;
    } else {
        bank = bank - 100;
    }

    render();
}

function getRandomSlot(){
    const option = ['coin', 'dollar', 'seven', 'key'];
    const randomIndex = Math.floor(Math.random() * 4)

    return option[randomIndex]
}

