export default class Popover {
  constructor() {
    this.visible = false;
    this.popover = null;
  }

  createPopover() {
    this.popover = document.createElement('div');
    this.popover.className = 'popover hide';

    // Popover Position
    const { left, top } = document.querySelector('.btn').getBoundingClientRect();
    this.popover.style.top = (top / 4) + 15 + 'px';
    this.popover.style.left = (left / 1.7) + 'px';
    document.body.appendChild(this.popover);

    // Popover Title
    const popoverHeader = document.createElement('h3');
    popoverHeader.className = 'popover-header';
    popoverHeader.textContent = 'Popover Title';
    this.popover.appendChild(popoverHeader);

    // Popover Main Message
    const popoverBody = document.createElement('h3');
    popoverBody.className = 'popover-body';
    popoverBody.textContent = "And here's some amazing content. It's very engaging. Right?";
    this.popover.appendChild(popoverBody);

    // Popover Arrow
    const popoverArrow = document.createElement('div');
    popoverArrow.className = 'arrow';
    this.popover.appendChild(popoverArrow);
  }

  showPopover() {
    this.popover.classList.remove('hide');
    this.visible = true;
  }

  removePopover() {
    this.popover.classList.add('hide');
    this.visible = false;
  }
}
