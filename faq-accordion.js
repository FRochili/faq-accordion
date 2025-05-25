const questionLists = document.querySelectorAll('.questionList');

questionLists.forEach(q => {
  const btn = q.querySelector('button');
  const answer = q.nextElementSibling;

  q.addEventListener('click', () => {
    const isActive = answer.classList.contains('active');

    // Close all answers and reset buttons
    document.querySelectorAll('.answer').forEach(a => a.classList.remove('active'));
    document.querySelectorAll('.plusIcon').forEach(b => b.textContent = '+');

    // If it was NOT active before, open it now
    if (!isActive) {
      answer.classList.add('active');
      btn.textContent = '-';
    }
    // Else: do nothing — everything is now collapsed
  });
});
