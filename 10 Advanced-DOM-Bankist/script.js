'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////

// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);


document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button')
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements

// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // and element as first child
header.append(message); // last child
// header.append(message.cloneNode(true)); // to place node at multiple place

// header.before(message);
// header.after(message);

// Delete elements
document.querySelector(".btn--close-cookie").addEventListener('click', function() {
  // message.remove();
  message.parentElement.removeChild(message);
});

header.insertAdjacentHTML('afterbegin',
  '<div>Welcome my boy</div>');

// Styles
message.style.backgroundColor = '#37373d';
message.style.width = '120%';

// only display the properties that is manually set
console.log(message.style.backgroundColor);
// doesn't display it as it is not manually set
console.log(message.style.color);

// display property even if it is not present
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
console.log(logo.src);

logo.alt = "Beautiful minmalist logo"
// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
console.log(logo.setAttribute('company', 'Bankist'));

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attribute
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use
logo.className = 'jonas'