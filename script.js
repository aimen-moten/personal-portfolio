$(document).ready(function(){

    // owl carousel script
    $('.carousel').owlCarousel({
    margin: 20,
    loop: false,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items :1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
    
    }); 
});

// Text typing animations
var typed = new Typed(".typing", {
strings:['A Former SWE Intern at IpserLab', 'An Information Technology Associates Program Intern', 'A Pakistan National Informatics Olympiad Gold Medalist', 'An Undergraduate Student', 'Freshman Chair at Women In Computer Science', 'President for Computing Opportunities For Students of Color', 'The Chief Executive Officer at Zyana', 'A Former Content Writing Intern at Penumbra Digital', 'A Former Core Team Leader at Energy Clinic Pakistan', 'A College Counsellor at Sahaeli', 'The Lead Coding Mentor at Cyber Allies', 'The Chair at International Computer Science Association', 'A Life Long Learner', 'An Entrepreneur', 'A Travel Lover'],
typeSpeed: 90,
backSpeed: 35,
loop: true
});
 
// Text Transition Animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '49px',
    duration: 2000,
});

sr.reveal('.logo',{delay:650});
sr.reveal('.menu',{delay:950});

sr.reveal('.text-1',{delay: 1620});
sr.reveal('.text-2',{delay: 2550}); 

sr.reveal('.section-title',{}); 
sr.reveal('.right-coloumn',{delay: 350}); 
sr.reveal('.left-coloumn',{delay: 2050}); 


sr.reveal('.right-coloumn', { easing: 'ease-in' });
ScrollReveal().reveal('.left-coloumn', { scale: 1.05 });

sr.reveal('.section-title',{});  
sr.reveal('.project-content-top',{delay: 750}); 
sr.reveal('.project-content-bottom',{delay: 1650});
sr.reveal('.ending',{delay: 250});


sr.reveal('.title',{interval: 200}); 
sr.reveal('.carousel owl-carousel',{delay:500});

sr.reveal('.center-coloumn',{delay:550}); 
sr.reveal('.socialLinks',{delay:1350});
sr.reveal('.contact-form',{delay:1750});
sr.reveal('.feedback',{delay:1950});

// Toggle Menu

function toggle(){
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
    $("li").click(toggle);
}

$(".menu-btn").click(toggle);




// email submit message
var bttn = document.getElementById("button");
var mssg = document.getElementById("submitMessage");

bttn.addEventListener("click",function(event){
    mssg.className = mssg.className + "visible";
});

// Scroll Up Button
/*
var bttn = document.getElementById("btt-to-top"),
    body= document.body,
     docElem=document.documentElement,
     scrollPos, 
     offset,
     docHeight;

    docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight,docElem.offsetHeight,docElem.scrollHeight);
    offset = docHeight/2;
    

     document.addEventListener("scroll",function(event){
      scrollPos = body.scrollTop || docElem.scrollTop;  
      bttn.className = (scrollPos > offset) ? "visible" : "" ;
     });*/