// Dummy data
const booksArray = [
  {
    title: 'The 48 Laws of Power',
    author: 'Robert Greene',
    description:
      'The 48 Laws of Power is a non-fiction book by American author Robert Greene. The book is a bestseller, selling over 1.2 million copies in the United States, and is popular with prison inmates and celebrities.'
  },
  {
    title: 'Hatchet',
    author: 'Gary Paulsen',
    description:
      'Hatchet is a 1986 Newbery Honor-winning young-adult wilderness survival novel written by American writer Gary Paulsen. It is the first novel of five in the Hatchet series.'
  },
  {
    title: 'Thirteen Reasons Why',
    author: 'Jay Asher',
    description:
      'Thirteen Reasons Why is a young adult novel written in 2007 by Jay Asher. It is the story of a young high school student as she descends into despair brought on by betrayal and bullying, culminating with her suicide. She details the thirteen reasons why she was driven to end her life in an audio diary which is mailed to a friend two weeks after her death.'
  }
];

// Loop through dummy data
const cardContainer = document.getElementById('bookContainer');
booksArray.forEach(item => {
  const cards = bookCard(item);
  cardContainer.appendChild(cards);
});

// Book Card Generator
function bookCard(data) {
  // Create elements
  const col = document.createElement('col');
  const card = document.createElement('div');
  const cardContent = document.createElement('div');
  const title = document.createElement('span');
  const subtitle = document.createElement('small');
  const paragraph = document.createElement('p');
  const cardBtnContainer = document.createElement('div');
  const button = document.createElement('a');

  // Nest child elements
  col.appendChild(card);
  card.appendChild(cardContent);
  cardContent.appendChild(title);
  cardContent.appendChild(subtitle);
  cardContent.appendChild(paragraph);
  card.appendChild(cardBtnContainer);
  cardBtnContainer.appendChild(button);

  // Add classes
  col.classList.add('col', 's12');
  card.classList.add('card');
  cardContent.classList.add('card-content', 'black-text');
  title.classList.add('card-title');
  paragraph.style.cssText = 'margin-top: 8px;';
  cardBtnContainer.classList.add('card-action');
  button.classList.add('waves-effect', 'red', 'lighten-3', 'btn-small');

  // Dynamic text content
  title.textContent = data.title;
  subtitle.textContent = data.author;
  paragraph.textContent = data.description;
  button.textContent = 'Delete';

  // Event listener
  button.addEventListener('click', () => {
    col.remove();
  });

  return col;
}

// Book Constructor
function Book(title, author, description) {
  this.title = title;
  this.author = author;
  this.description = description;
}

// Add book
function createBook() {
  const title = document.querySelector('#title').value; // Title input
  const author = document.querySelector('#author').value; // Author input
  const description = document.querySelector('#description').value; // Description input

  const book = new Book(title, author, description);

  const newCard = bookCard(book);

  cardContainer.prepend(newCard);
}

// Submission event handler
const submit = document.querySelector('#addBook');
const myForm = document.querySelector('#myForm');

submit.addEventListener('click', e => {
  e.preventDefault();
  createBook();

  // Resting form input
  title.value = '';
  author.value = '';
  description.value = '';
});
