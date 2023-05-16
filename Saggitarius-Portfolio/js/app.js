//Get  HTML Elements
const toggleButton = document.getElementsByClassName('mobile-menu')[0];
const page = document.getElementsByClassName('page')[0];
const headerMenu = document.getElementsByClassName('header-menu')[0];
const contactButton = document.getElementsByClassName('contact-button')[0];
const contactButton2 = document.getElementsByClassName('contact-button')[1];
const contactOverlay = document.getElementsByClassName('contact')[0];
const contactCloseButton = document.getElementsByClassName('contact-closebutton')[0];



function getCurrentPage() {
  const curPage = document.URL;
  const links = document.getElementsByTagName('a');
  for (let link of links) {
    if (link.href == curPage) {
      link.classList.add("active");
    }
  }
}


document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    getCurrentPage();
  }
};



//Toggle the menu-button and Navigation Items
toggleButton.addEventListener('click', () => {
  page.classList.toggle('fixed'),
    headerMenu.classList.toggle('open'),
    toggleButton.classList.toggle('open')
});
contactCloseButton.addEventListener('click', () => {
  contactOverlay.classList.remove('open'),
  page.classList.remove('fixed')


});

contactButton.addEventListener('click', () => {
  contactOverlay.classList.toggle('open'),
  page.classList.toggle('fixed'),
  headerMenu.classList.remove('open'),
  toggleButton.classList.remove('open')
});

contactButton2.addEventListener('click', () => {
  contactOverlay.classList.toggle('open'),
  page.classList.toggle('fixed'),
  headerMenu.classList.remove('open'),
  toggleButton.classList.remove('open')
});

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 815px)").matches) {
    page.classList.remove('fixed'),
    headerMenu.classList.remove('open'),
    toggleButton.classList.remove('open')
  }});

  function scaleTarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}
