// Content, Attributes & Classes
// Open index.html and work through these in order.

// TODO 1: Select #heading and change its textContent to "Welcome!"
const heading = document.querySelector('#heading');
heading.textContent = 'Welcome!';

// TODO 2: Select #bio (it currently reads "I am learning the DOM."). Set its
// innerHTML so the word "learning" is wrapped in a <strong> tag, i.e. the
// paragraph should read: I am <strong>learning</strong> the DOM.
const bio = document.querySelector('#bio');
bio.innerHTML = 'I am <strong>learning</strong> the DOM.';

// TODO 3: Select #card. Read its "class" attribute with getAttribute and
// console.log() it.
const card = document.querySelector('#card');
console.log(card.getAttribute('class'));

// TODO 4: Add the "highlight" class to #card using classList.add, then
// console.log(card.className) to see it there. (You'll learn to do this in
// response to a click in the next exercise, 03-events-basics.)
card.classList.add('highlight');
console.log(card.className);

// TODO 5: #card starts with a data-visits="0" attribute. Read the current
// value with card.dataset.visits, convert it to a number, add 1, write it
// back to card.dataset.visits, and console.log() the new value.
let visits = Number(card.dataset.visits);  // แปลง "0" เป็น 0
visits += 1;                               // บวกเพิ่ม 1
card.dataset.visits = visits;              // บันทึกค่าใหม่กลับไปที่ dataset
console.log(card.dataset.visits);          // แสดงผลลัพธ์ (จะได้ 1)