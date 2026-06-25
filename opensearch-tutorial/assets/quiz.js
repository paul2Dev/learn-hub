/**
 * Quiz widget — OpenSearch Tutorial
 * Folosit în toate lecțiile care conțin întrebări interactive.
 *
 * Structura HTML așteptată:
 *   <div class="quiz-q" data-answer="B">
 *     <p>Întrebarea...</p>
 *     <button class="quiz-opt" data-val="A">Varianta A</button>
 *     <button class="quiz-opt" data-val="B">Varianta B</button>
 *     ...
 *     <div class="quiz-feedback"></div>
 *   </div>
 *
 * Opțional: <div class="quiz-score"></div> pentru scor final.
 */

(function () {
  function initQuiz(container) {
    const questions = container.querySelectorAll('.quiz-q');
    let answered = 0;
    let correct = 0;
    const scoreEl = container.querySelector('.quiz-score');

    questions.forEach(function (q) {
      const answer = q.dataset.answer;
      const opts = q.querySelectorAll('.quiz-opt');
      const feedback = q.querySelector('.quiz-feedback');

      opts.forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (q.dataset.done) return; // răspuns deja dat
          q.dataset.done = '1';
          answered++;

          const chosen = btn.dataset.val;
          if (chosen === answer) {
            btn.classList.add('correct');
            feedback.textContent = '✓ Corect!';
            feedback.className = 'quiz-feedback ok';
            correct++;
          } else {
            btn.classList.add('wrong');
            feedback.textContent = '✗ Greșit.';
            feedback.className = 'quiz-feedback err';
            // Arată răspunsul corect
            opts.forEach(function (b) {
              if (b.dataset.val === answer) b.classList.add('reveal');
            });
          }

          // Afișează scorul dacă toate întrebările au primit răspuns
          if (scoreEl && answered === questions.length) {
            const pct = Math.round((correct / questions.length) * 100);
            scoreEl.textContent = 'Scor: ' + correct + '/' + questions.length + ' (' + pct + '%)';
            scoreEl.style.display = 'block';
            if (pct === 100) {
              scoreEl.style.background = '#e8f5ec';
              scoreEl.style.color = '#1c7a3b';
            } else if (pct >= 60) {
              scoreEl.style.background = '#fdf1e8';
              scoreEl.style.color = '#c04f00';
            } else {
              scoreEl.style.background = '#fde8ea';
              scoreEl.style.color = '#a51d2d';
            }
          }
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.quiz-section').forEach(initQuiz);
  });
})();
