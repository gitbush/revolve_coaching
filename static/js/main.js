/**
 * 
 * Nav toggle
 */

(function() {
  
  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),
    navClose: document.querySelector('.svg-close'),

    

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
      question : `I am ready to make a positive change and 
                  live a life I absolutely love`,
      choiceTrue : "True",
      choiceFalse : "False",
      number: `1/${numberOfQuestions}`,
  },{
      question : `I want to get unstuck and stop repeating the same old patterns`,
      choiceTrue : "True",
      choiceFalse : "False",
      number: `2/${numberOfQuestions}`
  },{
      question : `I know deep down that I have the power to change my life`,
      choiceTrue : "True",
      choiceFalse : "False",
      number: `3/${numberOfQuestions}`
  },{
      question : `I acknowledge that much of the coaching process takes place between sessions and I’m ready and willing to do the work`,
      choiceTrue : "True",
      choiceFalse : "False",
      number: `4/${numberOfQuestions}`
  },{
      question : `I am ready to challenge and confront my way of thinking and doing in order to change my life for the better`,
      choiceTrue : "True",
      choiceFalse : "False",
      number: `5/${numberOfQuestions}`
  },{
      question : `I recognise my coach can’t fix my problems on my behalf, the work is mine to do with their expert support`,
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

// create our results
let results = [
  {
      result : `You were ready yesterday! Nothing can stand in your way. Lets chat! Book your free, no obligation clarity call here with yours truly`,
  },{
      result : `You are ready...yet a little tentative.  That’s okay!  Often the biggest step is commiting to the process and affirming you are active 
                rather than passive in your current situation.  I’m here to help. Book your free, no obligation clarity call here and let's chat about 
                your next steps`,
  },{
      result : `You might not be quite ready...yet.  Think of the questions you answered ‘False’ to, what would it take to turn 1 or more of those to ‘True’? 
                If you want to discuss with an expert you can book your free clarity call with me here`,
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

// Show resuting text from quiz
function resultRender(){
  quiz.style.display ="none";
  quizIntro.style.display = "block";
  quizIntro.classList.add("quiz-result")
  if(trueCount >= 5){
    quizIntroText.innerHTML = `${results[0].result}`;
    quizStart.innerHTML = `Free clarity call`;
    quizStart.href = `https://app.acuityscheduling.com/schedule.php?owner=19489834&appointmentType=17193339`;
  } 
  else if(trueCount < 3){
    quizIntroText.innerHTML = `${results[2].result}`;
    quizStart.innerHTML = `Free clarity call`;
    quizStart.href = `https://app.acuityscheduling.com/schedule.php?owner=19489834&appointmentType=17193339`;

  } else{
    quizIntroText.innerHTML = `${results[1].result}`;
    quizStart.innerHTML = `Free clarity call`;
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


/**
 * Smooth scroll
 */

$(document).ready(function(){


  $("#bannerBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#quizSection").offset().top -150
    }, 1000);
  });

});
