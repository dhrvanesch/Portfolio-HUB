//Get  HTML Elements
const darkMode = document.getElementsByClassName('darkmode')[0]
const body = document.getElementsByTagName('body')[0]
const jumbotron = document.getElementsByClassName('jumbotron')[0]
const contact = document.getElementsByClassName('main-contact')[0]
const contactImg = document.getElementsByClassName('contact-img')[0]
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const toggleBars = document.getElementsByClassName('bar1')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]
const headerBar = document.getElementsByClassName('header-background')[0]
const info = document.getElementsByClassName('image-box')



// List of all the insertable html for each project
const projectList = {
                          
  0: `<div class="image-box col-lg-3 col-md-12 col-4 col-xs col-12">
<img class="images shadow img-fluid img-responsive alt="
    src="./images/spacekitten.jpg"> 
</div>
<div class="image-box col-lg-6 col-md-6 col-6 col-xs col-12">
<img class="images shadow img-fluid img-responsive alt="
  src="./images/spacekitten-posterv2.jpg"> 
</div>

<div class="image-box col-lg-3 col-md-6 col-6 col-xs col-12">
<img class="images shadow img-fluid img-responsive alt="
src="./images/spacekitten-poster.jpg"> 
      </div>`,

  0.5: "Fleet Commander Meowsers",
  0.6: "May 10, 2019",

  1: `<div class="image-box col-lg-6 col-md-6 col-4 col-xs col-12">
  <img class="images shadow img-fluid img-responsive alt="
      src="./images/shades.jpg"> 
  </div>
  <div class="image-box col-lg-6 col-md-6 col-6 col-xs col-12">
  <img class="images shadow img-fluid img-responsive alt="
    src="./images/dokkaebi.jpg"> 
  </div>
  <div class="image-box col-lg-6 col-md-6 col-6 col-xs col-12">
  <img class="images shadow img-fluid img-responsive alt="
    src="./images/product-render.jpg"> 
  </div>
  
  <div class="image-box col-lg-6 col-md-6 col-6 col-xs col-12">
  <img class="images shadow img-fluid img-responsive alt="
  src="./images/liquiddream.jpg"> 
      </div>`,

  1.5: "Various Posters",
  1.6: "July 9 - September 28, 2019",

  2: `<div class="image-box col-lg-3 col-md-12 col-4 col-xs col-12">
  <img class="images shadow img-fluid img-responsive alt="
      src="./images/UI-pc.jpg"> 
  </div>
  <div class="image-box col-lg-6 col-md-6 col-6 col-xs col-12">
  <img class="images shadow img-fluid img-responsive alt="
    src="./images/UI-notebook.jpg"> 
  </div>
  <div class="image-box col-lg-3 col-md-6 col-6 col-xs col-12">
  <img class="images shadow img-fluid img-responsive alt="
    src="./images/UI-mobile.jpg"> 
      </div>`,

  2.5: "3D Flat Design",
  2.6: "June 7, 2020",

  3: `<div class="image-box col-lg-3 col-md-12 col-4 col-xs col-12">
  <img class="images shadow img-fluid img-responsive alt="
      src="./images/tower-groningen.jpg"> 
  </div>
  <div class="image-box col-lg-6 col-md-6 col-6 col-xs col-12">
  <img class="images shadow img-fluid img-responsive alt="
    src="./images/tower-martini.jpg"> 
  </div>
  <div class="image-box col-lg-3 col-md-6 col-6 col-xs col-12">
  <img class="images shadow img-fluid img-responsive alt="
    src="./images/tower-top.jpg"> 
  </div>`,

  3.5: "Martinitoren, Groningen",
  3.6: "June 7, 2020",

  4: `<div class="image-box col-lg-3 col-md-12 col-4 col-xs col-12">
  <img class="images shadow img-fluid img-responsive alt="
      src="./images/piano-front.jpg"> 
  </div>
  <div class="image-box col-lg-6 col-md-6 col-6 col-xs col-12">
  <img class="images shadow img-fluid img-responsive alt="
    src="./images/piano-frontside.jpg"> 
  </div>
  <div class="image-box col-lg-3 col-md-6 col-6 col-xs col-12">
  <img class="images shadow img-fluid img-responsive alt="
    src="./images/piano-top.jpg"> 
  </div>`,

  4.5: "Piano, My favorite",
  4.6: "June 7, 2020",

  5: `<div class="image-box col-lg-3 col-md-12 col-4 col-xs col-12">
  <img class="images shadow img-fluid img-responsive alt="
      src="./images/character-phone.jpg"> 
  </div>
  <div class="image-box col-lg-6 col-md-6 col-6 col-xs col-12">
  <img class="images shadow img-fluid img-responsive alt="
    src="./images/character-closeup.jpg"> 
  </div>
  <div class="image-box col-lg-3 col-md-6 col-6 col-xs col-12">
  <img class="images shadow img-fluid img-responsive alt="
    src="./images/character-sad.jpg"> 
  </div>`,

  5.5: "Character Shots",
  5.6: "June 7, 2020",
};


// GET INDEX of clicked image-box(i)
for (let i = 0; i < info.length; i++) {
  info[i].addEventListener('click', () => {

    //Fetch work.html
    fetch("./work.html")
      .then(response => {
        return response.text()
      })
      .then(data => {
        //Insert work.html into index.html
        document.getElementById("illustration-overlay").innerHTML = data;

        //locate the containers that hold the information
        const gallery = document.getElementById('illustration');
        const date = document.getElementById('date-id');
        const title = document.getElementById('illustration-id');

        //Insert the correct illustrations according to the clicked element(Index).
        gallery.innerHTML = projectList[i];
        // Get the corresponding title and date based on the Index(i);
        title.innerHTML = projectList[i + 0.5];
        date.innerHTML = projectList[i + 0.6];

        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });
  });
}

//Toggle the menu-button and Navigation Items
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active'),
    toggleBars.classList.toggle('active'),
    toggleButton.classList.toggle('active'),
    headerBar.classList.toggle('active')
});

// Toggle Dark-modus on the listed below & filter error if it is not defined at current page
darkMode.addEventListener('click', () => {
  try {
    darkMode.classList.toggle('active');
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    headerBar.classList.toggle('dark-theme');
    headerBar.classList.toggle('light-theme');
    contact.classList.toggle('dark-theme');
    contact.classList.toggle('light-theme');
    contactImg.classList.toggle('dark-theme');
    contactImg.classList.toggle('light-theme');
  } catch (ignore) {
    console.log("No Errors")
  }

});

//FETCH footer
fetch("./footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });