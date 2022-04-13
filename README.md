# Bootstrap 5.1.3 nested modals

To be able to use nested modals in Bootstrap 5.1.3 which are open at the same time you cant use bs-toggle anymore.
You have to use javascript to trigger the modals yourself.

**The modal.js contains javascript which does it automatically for you.**
- Make the modals as normally under **<*body*>**.
- Add a button to page which opens the first modal.
- Add a button to the first modal content which opens the second modal.
- To prevent the second modal to visually overlap the first modal give the modal a margin as "mt-5 ms-5" to move it a bit.
- Use **data-bs-backdrop="static"** if you dont dont want to close the modal on click. (See Bootstrap documentation).
  
Dont forget **defer** when loading javascript.
```
  <script src="/js/modal.js" defer></script>
```
  
Add the class **showmodal** to make the button show the modal on a click. Assign **data-show-modal** the **id** of the modal to show.
```
<button type="button" class="btn btn-primary showmodal" data-show-modal="infoModal">
  Show second modal
</button>
```
