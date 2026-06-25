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
                ? 'Perfect score — the mental model is solid.'
                : score >= Math.ceil(questions.length / 2)
                ? 'Good effort. Re-read any section that felt uncertain, then try again.'
                : 'Go back through the lesson once more, then retry.'
            }</p>
          </div>`;
        return;
      }

      const q = questions[idx];
      root.innerHTML = `
        <div class="quiz-card">
          <p class="quiz-progress">Question ${idx + 1} of ${questions.length}</p>
          <p class="quiz-question">${q.q}</p>
          <div class="quiz-options" role="group" aria-label="Answer options">
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
            (isRight ? '✓ Correct.' : '✗ Not quite.') +
            '</strong> ' +
            q.explain;

          const nextBtn = document.createElement('button');
          nextBtn.className = 'quiz-next';
          nextBtn.type = 'button';
          nextBtn.textContent =
            idx < questions.length - 1 ? 'Next →' : 'See results →';
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
