/* make contents adaptable to window width */
const wrapper = document.getElementById('wrapper');
var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
width = width - 20;
wrapper.style.width = width + 'px';


/* add .active class to section when scrolled to */
var projectsContainer = document.getElementById('projects-container');
var skillsContainer = document.getElementById('skills-container');
var experienceContainer = document.getElementById('experience-container');
var aboutContainer = document.getElementById('about-container');

var navLinks = document.getElementsByClassName('nav-link');
var projectsLink = navLinks[0].parentElement;
var skillsLink = navLinks[1].parentElement;
var experienceLink = navLinks[2].parentElement;
var aboutLink = navLinks[3].parentElement;

var emailAddress = document.getElementById('email-address');

const updateNavLinks = () => {
    var windowTop = document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = window.innerHeight;
    var docHeight = Math.max( document.body.scrollHeigh || document.documentElement.scrollHeight );
    if (windowTop >= 0) {
        addActiveClass(projectsLink);
    } 
    if (windowTop + 500 >= skillsContainer.offsetTop) {
        addActiveClass(skillsLink);
    }

    if (windowTop + 300 >= experienceContainer.offsetTop) {
        addActiveClass(experienceLink);
    }

    if (windowTop + windowHeight + 300 >= docHeight) {
        addActiveClass(aboutLink);
    }

};

const addActiveClass = (activeClass) => {
    activeClass.classList.add('active');
    if (projectsLink != activeClass) {
        projectsLink.classList.remove('active');
    }
    if (skillsLink != activeClass) {
        skillsLink.classList.remove('active');
    }
    if (experienceLink != activeClass) {
        experienceLink.classList.remove('active');
    }
    if (aboutLink != activeClass) {
        aboutLink.classList.remove('active');
    }
};

window.addEventListener('scroll', updateNavLinks);

projectsLink.addEventListener('click', updateNavLinks);
skillsLink.addEventListener('click', updateNavLinks);
experienceLink.addEventListener('click', updateNavLinks);
aboutLink.addEventListener('click', updateNavLinks);

window.addEventListener('load', updateNavLinks);

emailAddress.addEventListener('click', function() {
    var textArea = document.createElement("textarea");
    textArea.value = "ericmailr@gmail.com";
    textArea.style.display = "none";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
   
    document.body.removeChild(textArea);
});

