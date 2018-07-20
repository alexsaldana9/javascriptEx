var printer = document.getElementById("print-button");

function printPage() {
  window.print();
}

printer.addEventListener("click", printPage);
