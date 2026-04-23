function filterWork(type, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.work-card').forEach(card => {
    if (type === 'all' || card.dataset.type === type) {
      card.removeAttribute('data-hidden');
    } else {
      card.setAttribute('data-hidden', 'true');
    }
  });
}
