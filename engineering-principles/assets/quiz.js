/* Engineering Principles — Quiz Widget (one-by-one) */
(function () {
  'use strict';

  function initQuiz(quizEl) {
    var questions = Array.prototype.slice.call(quizEl.querySelectorAll('.quiz-question'));
    var scoreEl   = quizEl.querySelector('.quiz-score');
    var total     = questions.length;
    var correct   = 0;
    var current   = 0;

    questions.forEach(function (q, i) {
      q.style.display = i === 0 ? '' : 'none';
    });

    function showQuestion(idx) {
      questions.forEach(function (q, i) {
        q.style.display = i === idx ? '' : 'none';
      });
    }

    function showScore() {
      questions.forEach(function (q) { q.style.display = 'none'; });
      if (!scoreEl) return;
      var pct = Math.round((correct / total) * 100);
      var msg = pct >= 80
        ? 'Strong result — ready for the next lesson.'
        : 'Review the sections above, then re-read the lesson before moving on.';
      scoreEl.innerHTML =
        '<p class="quiz-final-score">' + correct + '&thinsp;/&thinsp;' + total + '</p>' +
        '<p>' + msg + '</p>';
      scoreEl.style.display = 'block';
    }

    function activateQuestion(qEl) {
      var buttons  = Array.prototype.slice.call(qEl.querySelectorAll('.quiz-options button'));
      var feedback = qEl.querySelector('.quiz-feedback');
      var done     = false;

      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (done) return;
          done = true;

          var isCorrect = btn.dataset.correct === 'true';
          if (isCorrect) correct++;

          buttons.forEach(function (b) {
            b.disabled = true;
            if (b.dataset.correct === 'true') b.classList.add('correct');
            else if (b === btn)               b.classList.add('wrong');
          });

          if (feedback) {
            feedback.classList.add('show');
            feedback.classList.add(isCorrect ? 'correct-fb' : 'wrong-fb');
          }

          var nextBtn = document.createElement('button');
          nextBtn.className = 'quiz-next';
          nextBtn.type = 'button';
          nextBtn.textContent = current < total - 1 ? 'Next question →' : 'See results →';
          nextBtn.addEventListener('click', function () {
            current++;
            if (current < total) {
              showQuestion(current);
              activateQuestion(questions[current]);
            } else {
              showScore();
            }
          });

          qEl.appendChild(nextBtn);
        });
      });
    }

    activateQuestion(questions[0]);
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.quiz').forEach(initQuiz);
  });
})();
