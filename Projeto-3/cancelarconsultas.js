function cancelarConsulta() {
  const row = this.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

const cancelButtons = document.querySelectorAll('button');

cancelButtons.forEach(button => {
  button.addEventListener('click', cancelarConsulta);
});
