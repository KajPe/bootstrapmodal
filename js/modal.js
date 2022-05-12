"use strict";

const modal_base_idx = 10000;
let modal_idx = 1;

Array.from(document.getElementsByClassName('showmodal')).forEach( (e) => {
  e.addEventListener('click', function(element) {
    element.preventDefault();
    if (e.hasAttribute('data-show-modal')) {
      showModal(e.getAttribute('data-show-modal'));
    }
  }); 
});

// This all is just to get modals stacked on each-other by manipulating z-index
Array.from(document.getElementsByClassName('modal')).forEach( (e) => {
  e.addEventListener('shown.bs.modal', function(event) {
    // Set the current level of modal
    e.setAttribute('data-idx', modal_idx);
    e.style.zIndex = modal_base_idx + (modal_idx * 100);
    // Find the backdrop and sets it z-index
    Array.from(document.getElementsByClassName('modal-backdrop')).forEach( (element) => {
      if (!element.hasAttribute('data-idx')) {
        element.setAttribute('data-idx', modal_idx);
        element.style.zIndex = modal_base_idx + (modal_idx * 100) - 10;
      }
    });
    modal_idx += 1;
  });
  e.addEventListener('hidden.bs.modal', function(event) {
    // Modal closed
    modal_idx -= 1;
  });
});

// Show modal dialog
function showModal(modal) {
  const mid = document.getElementById(modal);
  let myModal = new bootstrap.Modal(mid);
  myModal.show();
}
