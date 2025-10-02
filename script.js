// Copy prompt function
function copyPrompt(button) {
  const text = button.previousElementSibling.innerText;
  navigator.clipboard.writeText(text).then(() => {
    button.innerText = "Copied!";
    setTimeout(() => button.innerText = "Copy prompt", 2000);
  });
}

// Search filter function
document.getElementById("search").addEventListener("input", function() {
  let filter = this.value.toLowerCase();
  let cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? "block" : "none";
  });
});
