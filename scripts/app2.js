const $openBtn = document.getElementById("open-btn"),
  $modalContainer = document.getElementById("modal-container"),
  $closeBtn = document.getElementById("close-btn");

// e v e n t   L i s t e n e r

$openBtn.addEventListener(
  "click",
  () => ($modalContainer.style.display = "block")
);

$closeBtn.addEventListener(
  "click",
  () => ($modalContainer.style.display = "none")
);
