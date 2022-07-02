const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade")
    })
    hamburger.classList.toggle("toggle")
})

window.addEventListener('scroll',reveal);

function reveal() {
    let reveals=document.querySelectorAll('.reveal');

    for(let i=0; i<reveals.length; i++){

        let windowHeight=window.innerHeight;
        let revealTop=reveals[i].getBoundingClientRect().top;
        let revealPoint=150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
            
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
    
}