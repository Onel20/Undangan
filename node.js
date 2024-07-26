document.addEventListener("DOMContentLoaded", () => {
    var countDownDate = new Date("Dec 12,2024 00:00:00");
        var x = setInterval(function(){
            var now = new Date().getTime();
            var countdown = countDownDate - now;
            
            var day = Math.floor(countdown/(1000*60*60*24));
            var hour = Math.floor((countdown % (1000*60*60*24))/(1000*60*60));
            var minute = Math.floor((countdown %(1000*60*60))/(1000*60));
            var second = Math.floor((countdown%(1000*60))/1000);
        
            document.getElementById("days").innerHTML = day;
            document.getElementById("hours").innerHTML = hour;
            document.getElementById("minutes").innerHTML = minute;
            document.getElementById("seconds").innerHTML = second;
        
            if(countdown < 0){
                clearInterval(x);
                document.getElementById("days").innerHTML = "00";
                document.getElementById("hours").innerHTML = "00";
                document.getElementById("minutes").innerHTML = "00";
                document.getElementById("seconds").innerHTML = "00";
            }
        },1000);



    //DARKMODE

    const switchDark = () => {
        document.querySelector("body").classList.toggle('dark');
        document.querySelector('.icon').classList.toggle('dark');
    }

    let darkInfo = JSON.parse(localStorage.getItem('dark'));
    if ( !localStorage.getItem('dark'))
        localStorage.setItem('dark', false);

    if (darkInfo){
        switchDark();  
    }

    document.querySelector("button").addEventListener('click', () => {
        // alert("click!");
        switchDark();
        darkInfo = !darkInfo;
        localStorage.setItem("dark", darkInfo);
    })
})


//SCROLL

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("home").addEventListener('click', () =>{
    scrollToSection('page1');
})
document.getElementById("groom").addEventListener('click', () =>{
    scrollToSection('page2');
})
document.getElementById("bride").addEventListener('click', () =>{
    scrollToSection('page3');
})
document.getElementById("info").addEventListener('click', () =>{
    scrollToSection('page4');
})