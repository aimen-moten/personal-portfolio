// Text typing animations
/*var typed = new Typed(".typing", {
    strings:["Student","Under-Graduate Student","Aspiring Software Developer","Entrepreneur","Fitness Athlete"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
    });*/
     
    // Text Transition Animations
    const sr = ScrollReveal({
        origin: 'top',
        distance: '40px',
        duration: 2000,
        loop: true
    });

    sr.reveal('.logo',{delay:200});
    sr.reveal('.menu',{delay:200});
    sr.reveal('.title',{delay:1000});
    sr.reveal('.gitLINK',{delay:1300});
    sr.reveal('.add',{delay:2400});
    sr.reveal('.sort',{delay:1950});

    sr.reveal('.projcontent',{delay:3200});

    // Toggle Menu

function toggle(){
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
    $("li").click(toggle);
}
$(".menu-btn").click(toggle);
    
    
    // email submit message
   /* var bttn = document.getElementById("button");
    var mssg = document.getElementById("submitMessage");
    
    bttn.addEventListener("click",function(event){
        mssg.className = mssg.className + "visible";
    });*/