import {Popover} from "./popover";

const form = document.querySelector('.form');
const popoverFactory = new Popover();
let isActualPopover = false;

const showPopover = (element) => {
    isActualPopover = popoverFactory.showPopover(element);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.btn');
    if (isActualPopover) {
        popoverFactory.removePopover();
        isActualPopover = false;
    } else {
        showPopover(btn);
    }
    console.log('submit');
});
