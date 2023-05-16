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