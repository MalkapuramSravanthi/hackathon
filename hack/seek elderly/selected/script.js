function showModal(name) {
  const modal = document.getElementById('modal');
  const details = `You are expressing interest in ${name}.`;
  document.querySelector('.modal-content p').innerText = details;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
