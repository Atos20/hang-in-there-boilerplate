// query selector variables go here 👇
// ~~~~~~~Buttons~~~~~~~~~~~~
var makeYourOwnPosterBtn = document.querySelector('.show-form');
var showSavedBtn = document.querySelector('.show-saved');
var backToMain = document.querySelector('.back-to-main');
var showMain = document.querySelector('.show-main');
var makePoster = document.querySelector('.make-poster')
//~~~~~~~~~input fields~~~~~~~~~~
var usersImage = document.querySelector('#poster-image-url');
var usersTitle = document.querySelector('#poster-title');
var usersQuote = document.querySelector('#poster-quote');
//~~~~~~~~~sections~~~~~~~~~~
var formSection = document.querySelector('.poster-form');
var mainPageSection = document.querySelector('.main-poster');
var savedPostersSection = document.querySelector('.saved-posters');
//~~~~~~~~~~new poster article~~~~~~
var newPoster = document.querySelector('.poster')

window.onload = displayRandomPoster;

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [
  new Poster (
    "https://i.giphy.com/media/5LU6ZcEGBbhVS/giphy.gif",
    "Optimism",
    "Keep a joyful heart!"
  )
];
var currentPoster;
// event listeners go here 👇
makeYourOwnPosterBtn.addEventListener('click', displayForm);
showSavedBtn.addEventListener('click', showSavedPosters);
backToMain.addEventListener('click', takeMeToMain);
showMain.addEventListener('click', takeMeToMain);
makePoster.addEventListener('click', createUsersPoster)
// functions and event handlers go here 👇
function displayRandomPoster() {
    newPoster.innerHTML = '';
    newPoster.innerHTML +=
    `<img class="poster-img" src="${images[getRandomIndex(images)]}" alt="nothin' to see here">
    <h1 class="poster-title">${titles[getRandomIndex(titles)]}</h1>
    <h3 class="poster-quote">${quotes[getRandomIndex(quotes)]}</h3>`;
}

function displayUsersPoster() {
  newPoster.innerHTML = '';
  newPoster.innerHTML +=
  `
  <img class="poster-img" src="${images[0]}" alt="nothin' to see here">
  <h1 class="poster-title">${titles[0]}</h1>
  <h3 class="poster-quote">${quotes[0]}</h3>
  `;
}

function createUsersPoster(event) {
  event.preventDefault()
  saveUsersData()
  currentPoster = new Poster(images[0], titles[0], quotes[0]);
  displayUsersPoster()
  takeMeToMain()
}//after the usersinformation is stored in the arrays, i assigned the currentPoster variable to an instance of the  Poster class name and by definifn the index number making sure it will always get the firs element of the array

function saveUsersData() {
  images.unshift(document.querySelector('#poster-image-url').value);
  titles.unshift(document.querySelector('#poster-title').value);
  quotes.unshift(document.querySelector('#poster-quote').value);
}// the users information is stored in it's  specific array

function takeMeToMain() {
  //remove hidden form main and add hidden to savedPostersSection
  mainPageSection.classList.remove('hidden')
  savedPostersSection.classList.add('hidden')
}

function showSavedPosters() {
  mainPageSection.classList.add('hidden')
  savedPostersSection.classList.remove('hidden')
}

function displayForm() {
 formSection.classList.remove('hidden');
 mainPageSection.classList.add('hidden');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}



// On the new poster form view, users should be able to fill out the three input fields and then hit the show my poster button
// When the show my poster button is clicked, several things will happen:
// Save the submitted data into the respective arrays (image URL into the images array, etc) so that future random posters can use the user-created data


// Use the values from the inputs to create a new instance of our Poster class
// Change back to the main poster view (hiding the form view again)
// Display the newly created poster image, title, and quote in the main view
