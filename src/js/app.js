import Popover from './widget/popover';

const btn = document.querySelector('.btn');
const popover = new Popover();

let firstClick = true;
btn.addEventListener('click', () => {
  if (firstClick) {
    popover.createPopover();

    firstClick = false;
  }
  if (popover.visible) {
    popover.removePopover();
  } else {
    popover.showPopover();
  }
});
