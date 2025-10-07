let count = localStorage.getItem("repCount") || 0;
count = parseInt(count);
document.getElementById("count").innerText = count;

function updateDisplay() {
  document.getElementById("count").innerText = count;
  localStorage.setItem("repCount", count);
}

function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  if (count > 0) {
    count--;
    updateDisplay();
  }
}

function reset() {
  count = 0;
  updateDisplay();
}
