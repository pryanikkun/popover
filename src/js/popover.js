export class Popover{
    constructor() {
        this.popover = null;
    }

    showPopover(element) {
        const popoverElement = document.createElement('div');
        popoverElement.classList.add('popover');
        // popoverElement.classList.add('show');
        // popoverElement.classList.add('fade');
        // popoverElement.classList.add('bs-popover-top');

        const popoverHeader = document.createElement('h3');
        popoverHeader.classList.add('popover-header');
        popoverHeader.textContent = element.getAttribute('data-original-title');

        const popoverContent = document.createElement('div');
        popoverContent.classList.add('popover-body');
        popoverContent.textContent = element.getAttribute('data-content');

        const popoverArrow = document.createElement('div');
        popoverArrow.classList.add('arrow');


        popoverElement.appendChild(popoverHeader);
        popoverElement.appendChild(popoverContent);
        popoverElement.appendChild(popoverArrow);


        document.body.appendChild(popoverElement);

        const { left, width } = element.getBoundingClientRect();
        popoverElement.style.bottom = element.offsetHeight + popoverElement.offsetHeight + 10 + 'px';
        popoverElement.style.left = (left + width / 2 - popoverElement.offsetWidth / 2) + 'px';
        this.popover = popoverElement;
        return true;
    }

    removePopover() {
        document.body.removeChild(this.popover);
    }
}
