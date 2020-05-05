const nextNext = document.getElementById('next-next')
const next = document.getElementById('next');
const prev = document.getElementById('prev');

const america1 = document.querySelector('.america1');
const america2 = document.querySelector('.america2');
const america3 = document.querySelector('.america3');

const cycle = document.querySelector('.cycle');

let nextNextInt = window.setInterval(function() {
  if (cycle.classList.contains('second')) {
    cycle.classList.remove('second');

    cycle.classList.add('third');
  }

}, 4000)

let nextint = window.setInterval(function() {
  if (cycle.classList.contains('first')) {
    cycle.classList.remove('first');

    cycle.classList.add('second');
  }

}, 8000)

let prevint = window.setInterval(function() {
  if (cycle.classList.contains('third')) {
    cycle.classList.remove('third');

    cycle.classList.add('first');
  }
}, 16000)

function dotClick(oldClassOne, oldClassTwo, newClass) {
  if (cycle.classList.contains(oldClassOne)) {
    cycle.classList.remove(oldClassOne);
  }

  if (cycle.classList.contains(oldClassTwo)) {
    cycle.classList.remove(oldClassTwo)
  }

  window.clearInterval(nextNextInt);
  window.clearInterval(nextint);
  window.clearInterval(prevint);
  cycle.classList.add(newClass);
}

nextNext.addEventListener("click", function() {
  dotClick('second', 'first', 'third');
})

next.addEventListener("click", function() {

  dotClick('first', 'third', 'second');

})

prev.addEventListener("click", function() {
  dotClick('third', 'second', 'first');
  
})
