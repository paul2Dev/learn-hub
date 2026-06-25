/* ============================================================
   quiz.js — reusable interactive quiz widget
   Usage: buildQuiz('element-id', questionsArray)
   Each question: { q, options, correct, explain }
   ============================================================ */

(function () {
  function buildQuiz(containerId, questions) {
    const root = document.getElementById(containerId);
    if (!root) return;

    let idx = 0;
    let score = 0;

    function render() {
      if (idx >= questions.length) {
        const pct = Math.round((score / questions.length) * 100);
        root.innerHTML = `
          <div class="quiz-result">
            <p class="quiz-score">${score}&thinsp;/&thinsp;${questions.length}</p>
            <p>${
              score === questions.length
                ? 'Perfect — conceptele sunt clare. Mergi la lecția următoare.'
                : score >= Math.ceil(questions.length / 2)
                ? 'Bun efort. Recitește secțiunile neclare, apoi încearcă din nou.'
                : 'Parcurge lecția încă o dată, apoi reîncearcă quiz-ul.'
            }</p>
          </div>`;
        return;
      }

      const q = questions[idx];
      root.innerHTML = `
        <div class="quiz-card">
          <p class="quiz-progress">Întrebarea ${idx + 1} din ${questions.length}</p>
          <p class="quiz-question">${q.q}</p>
          <div class="quiz-options" role="group" aria-label="Variante de răspuns">
            ${q.options
              .map(
                (opt, i) =>
                  `<button class="quiz-option" data-i="${i}" type="button">${opt}</button>`
              )
              .join('')}
          </div>
        </div>`;

      root.querySelectorAll('.quiz-option').forEach(function (btn) {
        btn.addEventListener('click', function () {
          const chosen = parseInt(this.dataset.i, 10);
          const isRight = chosen === q.correct;
          if (isRight) score++;

          root.querySelectorAll('.quiz-option').forEach(function (b, i) {
            b.disabled = true;
            if (i === q.correct) b.classList.add('quiz-correct');
            else if (i === chosen) b.classList.add('quiz-wrong');
          });

          const fb = document.createElement('div');
          fb.className =
            'quiz-feedback ' +
            (isRight ? 'quiz-feedback--right' : 'quiz-feedback--wrong');
          fb.innerHTML =
            '<strong>' +
            (isRight ? '✓ Corect.' : '✗ Nu chiar.') +
            '</strong> ' +
            q.explain;

          const nextBtn = document.createElement('button');
          nextBtn.className = 'quiz-next';
          nextBtn.type = 'button';
          nextBtn.textContent =
            idx < questions.length - 1 ? 'Următoarea →' : 'Vezi rezultatele →';
          nextBtn.addEventListener('click', function () {
            idx++;
            render();
          });

          const card = root.querySelector('.quiz-card');
          card.appendChild(fb);
          card.appendChild(nextBtn);
        });
      });
    }

    render();
  }

  window.buildQuiz = buildQuiz;
})();
