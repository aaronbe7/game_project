/*----- constants -----*/

const slotImages = {
    coin: 'imgs/number_1.png',
    dollar: 'imgs/number_2.png',
    seven: 'imgs/number_3.png',
    key: 'imgs/number_4.png',
}

/*----- app's state (variables) -----*/

let slots;
let winner;

/*----- cached element references -----*/

const backgroundEl = document.querySelector('div');

const slotsEl = {
    slot_1: {
        imgEl: document.querySelector('#slot1-result img'),
    },
    slot_2: {
        imgEl: document.querySelector('#slot2-result img'),
    },
    slot_3: {
        imgEl: document.querySelector('#slot3-result img'),
    },
    slot_4: {
        imgEl: document.querySelector('#slot4-result img'),
    },
}

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

    winner = null;

    render();
}

function render(){
    for (let slot in slots){

        backgroundEl.style.backgroundColor = winner === slot ? 'green': 'grey';

        slotsEl[slot].imgEl.src = slotImages[slots[slot]];
    }
}

/*----- functions -----*/

function playGame(){
    slots.slot_1 = getRandomSlot();
    slots.slot_2 = getRandomSlot();
    slots.slot_3 = getRandomSlot();
    slots.slot_4 = getRandomSlot();

    if((slots.slot_1 === slots.slot_2 ) && (slots.slot_2 === slots.slot_3)) {
       winner = 'slot_1', 'slot_2', 'slot_3';
    } else if ((slots.slot_2 === slots.slot_3) && (slots.slot_3 === slots.slot_4)) {
       winner = 'slot_2', 'slot_3', 'slot_4';
    } else if ((slots.slot_1 === slots.slot_3) && (slots.slot_3 === slots.slot_4)) {
       winner = 'slot_1', 'slot_3', 'slot_4';
    } else if ((slots.slot_1 === slots.slot_2) && (slots.slot_2 === slots.slot_4)) {
       winner = 'slot_1', 'slot_2', 'slot_4';
    } else if ((slots.slot_1 === slots.slot_2) && (slots.slot_2 === slots.slot_3) && (slots.slot_3 === slots.slot_4))
       winner = 'slot_1', 'slot_2', 'slots_3', 'slot_4';
    render();
}

function getRandomSlot(){
    const option = ['coin', 'dollar', 'seven', 'key'];
    const randomIndex = Math.floor(Math.random() * 4)

    return option[randomIndex]
}