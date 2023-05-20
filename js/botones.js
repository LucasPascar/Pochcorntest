function openModal(imageSrc) {
  var modal = document.getElementById("modal");
  var modalImage = document.getElementById("modalImage");

  modalImage.src = imageSrc;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
