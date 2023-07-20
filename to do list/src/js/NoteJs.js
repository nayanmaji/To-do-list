'use strict';

//Selectors//
const docket = document.querySelector('.docket');
const circleContainer = document.querySelector('.circle-container');
const circle = document.querySelectorAll('.circle');
const notesContainer = document.querySelector('.notes-container');
const note = document.querySelectorAll('.note');
const btnNewNote = document.querySelector('.new-note');
const newNoteCard = document.querySelector('.new-note-card');
const heading = document.querySelector('.new-note-heading');
const btnAddNote = document.querySelector('.check');
const noteText = document.querySelector('.new-note-text');
const btnEditNote = document.querySelector('.edit');
const btnStarNote = document.querySelector('.star');

//Variables//
const now = new Date();
const dateNow = String(now.getDate()).padStart(2, 0);
const monthNow = String(now.getMonth() + 1).padStart(2, 0);
const yearNow = String(now.getFullYear());

let bgColor;

//Functions//
const editNote = function (e) {
  e.target.style.display = 'block';
  console.log(e.target.style.display);
};

const bookmarkNote = function (e) {
  console.log('a');
  e.target.style.display = 'block';
  console.log(e.target.style.display);
};

const showNewNote = function (e) {
  notesContainer.insertBefore(
    newNoteCard,
    notesContainer.firstElementChild.previousSibling
  );

  newNoteCard.style.display = 'block';
  newNoteCard.classList.remove(
    'note-1',
    'note-2',
    'note-3',
    'note-4',
    'note-5'
  );
  bgColor = e.target.classList[1];
  newNoteCard.classList.add(e.target.classList[1]);
};

const addAndRenderNote = function () {
  const html = `
<div className="note ${bgColor}">
          <h3 className="note-heading">${heading.value}</h3>   
           <img
           className="star"
           src="https://cdn-icons-png.flaticon.com/128/3179/3179967.png"
           />     
          <p className="note-text">
            ${noteText.value}
          </p>
          <div className="date-added"><b>${dateNow}-${monthNow}-${yearNow}</b></div>
          <img
            className="edit"
            src="https://cdn-icons-png.flaticon.com/128/181/181540.png"
          />
        </div>`;

  notesContainer.insertAdjacentHTML('afterbegin', html);

  heading.value = '';
  noteText.value = '';
  newNoteCard.style.display = 'none';
  newNoteCard.classList.remove(
    'note-1',
    'note-2',
    'note-3',
    'note-4',
    'note-5'
  );
  circleContainer.style.display = 'none';
};

//Event Listeners//

// btnNewNote.addEventListener('mouseover', () => {
//   circle.forEach(circle => (circle.parentElement.style.display = 'grid'));
// });

// btnAddNote.addEventListener('click', addAndRenderNote);

// circle.forEach(circle => circle.addEventListener('click', showNewNote));

// btnEditNote.addEventListener('click', editNote);
// btnStarNote.addEventListener('click', bookmarkNote);
