// Get the form and the modal button
const form = document.getElementById("my-form");
const modalButton = document.getElementById("staticBackdrop");

// Add an event listener to the modal button to clear the form when the modal is closed
modalButton.addEventListener("click", function() {
  form.reset();
  modal.style.display = "none";
});
