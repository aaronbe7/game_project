/*----- constants -----*/

const slotImages = {
    coin: 'imgs/number_1.png',
    dollar: 'imgs/number_2.png',
    seven: 'imgs/number_3.png',
    key: 'imgs/number_4.png',
}

const min_same = 3;

/*----- app's state (variables) -----*/

let slots;
let winner;

/*----- cached element references -----*/

const slotsEl = {
    slot_1: {
        imgEl: document.querySelector('slot1-result img'),
    },
    slot_2: {
        imgEl: document.querySelector('slot1-result img'),
    },
    slot_3: {
        imgEl: document.querySelector('slot1-result img'),
    },
    slot_4: {
        imgEl: document.querySelector('slot1-result img'),
    },
}

/*----- event listeners -----*/

document.querySelector('button').addEventListener('click', playGame);

init();



function init(){

}

/*----- functions -----*/

