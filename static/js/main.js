/**
 * 
 * Nav toggle
 */

(function() {
  
  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),
    navClose: document.querySelector('.svg-close'),
    cartItem: document.querySelector('.snipcart-checkout'),

    

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
      this.navClose.classList.toggle('expanded');
    }
  };

  if(hamburger.navToggle){
    hamburger.navToggle.addEventListener('click', function(e) { 
      hamburger.doToggle(e); });
    hamburger.navClose.addEventListener('click', function(e) { 
      hamburger.doToggle(e); });
    hamburger.cartItem.addEventListener('click', function(e) {
      hamburger.doToggle(e);})
  }

}());


/**
 * 
 * aos
 * Animate on scroll inititiate and settings
 */


AOS.init({
  duration: 1200, // values from 0 to 3000, with step 50ms
  // once: true,
});




// var rellax = new Rellax('.rellax');

/**
 * 
 * things about me slider
 */

if(document.querySelector('.slide-btn')){
  var thingsSlides = document.querySelectorAll('.things-slider .slider-item');
  var currentSlide = 0;
  // var slideInterval = setInterval(nextSlide,2000);
  
  function nextSlide() {
      
      thingsSlides[currentSlide].className = 'slider-item';
      currentSlide = (currentSlide+1)%thingsSlides.length;
      thingsSlides[currentSlide].className = 'slider-item showing';
      
  }
  document.querySelector('.slide-btn').addEventListener('click', nextSlide)

}

/**
 * 
 * testimonial slider. Services.html
 */

if(document.querySelector('.circle-slide-btn')){
  var slides = document.querySelectorAll('.testimonials-slider .testimonial-item');
  var currentSlide2 = 0;
  // var slideInterval = setInterval(nextSlide,2000);
  
  function nextSlide2() {
      slides[currentSlide2].className = 'testimonial-item slide';
      currentSlide2 = (currentSlide2+1)%slides.length;
      slides[currentSlide2].className = 'testimonial-item slide test-showing';
      
  }
  document.querySelector('.circle-slide-btn').addEventListener('click', nextSlide2)
}

/**
 * Home hero auto slider 
 */

var heroSlides = document.querySelectorAll('.home-hero .home-hero-img');
var currentHeroSlide = 0;

if(heroSlides.length > 0){
  setInterval(function() {
    heroSlides[currentHeroSlide].className = 'home-hero-img';
    currentHeroSlide = (currentHeroSlide+1)%heroSlides.length;
    heroSlides[currentHeroSlide].className = 'home-hero-img hero-showing';
    
    if (currentHeroSlide >= heroSlides.length) {
      currentHeroSlide = 0;
    }
}, 4000);
}


/**  
 * Coaching personality quiz
 */

//  quiz options
let optionBtn = document.querySelectorAll('.option-btn')

// Set bg to pink when option is selected
optionBtn.forEach(btn => {
  btn.addEventListener('click', function(e){
    e.preventDefault()
    let sibling = getSibling(btn)
    btn.classList.add('highlight-btn')
  })
});

// Stop both options being able to be selected selected (not used)
function getSibling(el) {
  var sibling = [];
  elSib = el.parentNode.firstElementChild;
  do { if (elSib != el) sibling.push(elSib); } while (elSib = elSib.nextElementSibling);
  return sibling;
}


// quiz variables
const quizIntro = document.getElementById("quizIntro");
const quizCta = document.getElementById("quizCta");
const quizStart = document.getElementById("quizStart");
const quizIntroBtn = document.getElementById("quizIntroBtn");
const quizIntroText = document.getElementById("quizIntroText");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceTrue = document.getElementById("choiceTrue");
const choiceFalse = document.getElementById("choiceFalse");
const quizResult = document.getElementById("quizResult");
const resultDiv = document.getElementById("resultDiv");
const questionNumber = document.getElementById("questionNumber");
let numberOfQuestions = 7


// create our questions
let questions = [
  {
      question : `I’m feeling pumped about this journey! I’m ready to embrace every opportunity that comes my way and start living my best life.`,
      choiceTrue : "True",
      choiceFalse : "False",
      number: `1/${numberOfQuestions}`,
  },{
      question : `I’m ready to let go. I want to overcome my personal blockers and stop repeating the same old patterns.`,
      choiceTrue : "True",
      choiceFalse : "False",
      number: `2/${numberOfQuestions}`
  },{
      question : `I know that only I have the power to make a change. My life. My decisions. My happiness.`,
      choiceTrue : "True",
      choiceFalse : "False",
      number: `3/${numberOfQuestions}`
  },{
      question : `I know that working on myself doesn’t only happen in my sessions. I’m ready to give my time and effort to creating the life I want. `,
      choiceTrue : "True",
      choiceFalse : "False",
      number: `4/${numberOfQuestions}`
  },{
      question : `I’m ready to challenge my way of thinking and the status quo.`,
      choiceTrue : "True",
      choiceFalse : "False",
      number: `5/${numberOfQuestions}`
  },{
      question : `I recognise my coach can’t fix my problems on my behalf, the work is mine to do with their expert support. `,
      choiceTrue : "True",
      choiceFalse : "False",
      number: `6/${numberOfQuestions}`
  },{
      question : `I can happily imagine myself drinking champagne on a sunny rooftop bar (this isn’t a coaching question, just wondering if we will be BFFs)`,
      choiceTrue : "True",
      choiceFalse : "False",
      number: `7/${numberOfQuestions}`
  }
];

// create some variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let trueCount = 0;

// render a question
function renderQuestion(){

  let q = questions[runningQuestion];
  question.innerHTML = `<p>${q.question}</p>`;
  choiceTrue.innerHTML = q.choiceTrue;
  choiceFalse.innerHTML = q.choiceFalse;
  questionNumber.innerHTML = q.number
  setTimeout(() => 
  question.classList.remove('fade-in'), 2500)
  
}

// On click of first CTA button, show intro section
if(quizIntroBtn){
  quizIntroBtn.addEventListener("click", (e) =>{ 

      e.preventDefault();
      setTimeout(() => 
      renderQuizIntro(), 200)
          
  });
}

// On click of start quiz, show quiz container
if(quizStart){
  quizStart.addEventListener("click", (e) =>{ 
    if(quizStart.innerHTML === "Take the quiz"){
      e.preventDefault();
      setTimeout(() => 
      startQuiz(), 200)
      
    }

  });
}

// show quiz intro
function renderQuizIntro(){
  quizCta.style.display = "none"
  quizIntro.style.display ="block"
  quizIntro.classList.add("fade-in")
  
}

// show quiz
function renderQuiz(){
  console.log('quiz')
  quizIntro.style.display ="none"
  quiz.style.display = "block"
}

// start quiz
function startQuiz(){
  quizIntro.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  quiz.classList.add("fade-in")
}

//  Add pink bg to selected option
optionBtn.forEach(btn => {
  btn.addEventListener('click', function(e){
    e.preventDefault()
    let sibling = getSibling(btn)
    // console.log(btn)
    btn.classList.add('highlight-btn')
    checkAnswer(btn)

    setTimeout(() => 
        nextQuestion(btn), 300)
    
  })
});

// Render next question data
function nextQuestion(btn){
  if(runningQuestion < lastQuestion){
   
    runningQuestion++
    btn.classList.remove('highlight-btn')
    question.classList.add('fade-in')
    
    renderQuestion()
  } else{
    resultRender()
  }
}

// check if answer is true and increment count
function checkAnswer(btn){
  if(btn.innerHTML === "True"){
    trueCount ++
  }
}

// create our results
let results = [
  {
      result : `You were ready yesterday! <br><br> There’s nothing standing in your way. Book your free, no obligation call here to find out a little more and get to know each other better. <br><br>Let’s chat!`,
  },
  {
      result : `You might not be ready… yet. <br><br> Think of the questions you answered ‘false’ to. What would it take to turn some of those to ‘true’? You might benefit from having a 1 to 1 chat. <br><br>Book a call with me below. `,
  }
];

// Show resuting text from quiz
function resultRender(){
  quiz.style.display ="none";
  quizIntro.style.display = "block";
  quizIntro.classList.add("quiz-result")
  if(trueCount >= 6){
    quizIntroText.innerHTML = `${results[0].result}`;
    quizStart.innerHTML = `BOOK A CHAT`;
    quizStart.href = `https://app.acuityscheduling.com/schedule.php?owner=19489834&appointmentType=17193339`;
  } 
  else{
    quizIntroText.innerHTML = `${results[1].result}`;
    quizStart.innerHTML = `BOOK A CHAT`;
    quizStart.href = `https://app.acuityscheduling.com/schedule.php?owner=19489834&appointmentType=17193339`;

  } 
}


/**
 * Preloader spinner
 */

$(window).load(function () {
  $('#preloader').fadeOut(800, function () {
      $(this).remove();
  });
});


/**
 * Sticky nav
 */

var navbar = document.getElementById("header");
var placeholder = document.getElementsByClassName('placeholder')[0]
var quizBanner = document.getElementsByClassName('quiz-banner')[0]
var sticky = navbar.offsetTop;

let banner = false

if(window.innerWidth < 769 && quizBanner){
  window.onscroll = function() {myFunction()};

  function myFunction() {
  
      if (window.pageYOffset >= sticky)  {
        navbar.classList.add("sticky")
        placeholder.style.display = "block"
      } else {
        navbar.classList.remove("sticky");
        placeholder.style.display = "none"
      }
  }
}


// when banner is set to true make these changes
if(banner){
  let homeHero2 = document.getElementsByClassName('home-hero-2')[0]
  let headerNav = document.getElementById('header-nav')
  let headerName = document.getElementById('headerName')
  
  if(homeHero2){
    homeHero2.style.objectPosition = "50% 60%"
    if(window.innerWidth >= 360 && window.innerWidth <= 500){
    
      homeHero2.style.objectPosition = "50% 30%"
    }
  
    if(window.innerWidth >= 768){
      homeHero2.style.objectPosition = "50% 22%"
    }
  }
  headerNav.classList = 'toggle-header-relative'
  headerName.classList = 'header-name-quiz d-md-none'

 
}

/**
 * Smooth scroll
 */

$(document).ready(function(){


  $("#toTop").click(function() {
    $('html, body').animate({
        scrollTop: $("#header").offset().top -150
    }, 1000);
  }); 

});

/**
 * Gift card slider
 */
document.addEventListener( 'DOMContentLoaded', function () {

  const giftSplide = document.getElementById('primary-slider')

  if (giftSplide){
    var primarySlider = new Splide( '#primary-slider', {
      type       : 'fade',
      // heightRatio: 0.5,
      pagination : true,
      arrows     : false,
    } ); // do not call mount() here.
    
    primarySlider.mount();
  }
} );


document.addEventListener('snipcart.ready', () => {
  // You can safely use window.Snipcart here
  
});



/**
 * Countdown timer for opening ceremony
 */

// Set the date we're counting down to
let countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// if remaining value is less than 10 add a leading 0
function numberOfDigit(digit){
  if(digit < 10){
    digit = `${0}${digit}`
    return digit
  }
  else{
    digit = digit 
    return digit
  }
}

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer-days").innerHTML =  numberOfDigit(days);

  document.getElementById("timer-hours").innerHTML = numberOfDigit(hours);

  document.getElementById("timer-minutes").innerHTML =  numberOfDigit(minutes);

  document.getElementById("timer-seconds").innerHTML = numberOfDigit(seconds);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


let dropdownNavItem = document.getElementById('dropdown-btn');
let dropdownNav = document.getElementById('dropdown-content');

dropdownNavItem.addEventListener('click', function(){

  if(dropdownNav.style.display = 'none'){
    dropdownNav.style.display = 'block'
  }
  else if(dropdownNav.style.display = 'block'){
    dropdownNav.style.display = 'none'
  }
  
})