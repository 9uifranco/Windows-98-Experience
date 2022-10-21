// open and close window

var window_taskbar = document.getElementById("open-popup");
var window_button = document.getElementById("window-btn");
var help_window_button = document.getElementById("help-window-btn");
var shutDown_button = document.querySelector(".shutdown-btn");

let opening_from = document.querySelectorAll(".open-popup-by-menu");
let open_help_popup = document.querySelector(".open-help-popup");

var open_popup_by_menu = document.getElementById("open-popup-by-menu");
var program_taskbar = document.getElementById("program-taskbar");
var program_help_taskbar = document.getElementById("program-help-taskbar");
var popup_first_time = 0;

console.log(open_popup_by_menu);
console.log(opening_from);

// Intro

var audio2 = new Audio("/assets/startup-sound.mp3");
audio2.play();

setTimeout(function(){
    var intro = document.getElementById('start-page');
    intro.style.display = "none";
}, 8000);

// Desktop delay

setTimeout(function(){
    var desktop = document.getElementById('desktop-icons');
    desktop.style.display = "grid";
}, 10000);

if(open_help_popup){
        open_help_popup.addEventListener("click", function(){
        document.body.classList.add("active-help-popup");
        /*program_taskbar.style.display = "flex";*/
        program_help_taskbar.style.display = "flex";
    });
}

if(shutDown_button){
    shutDown_button.addEventListener("click", function(){
        var audio = new Audio("/assets/shutdown-sound.mp3");
        audio.play();
        var intro = document.getElementById('start-page');
        intro.style.display = "block";
        setTimeout(function(){
            var outro = document.getElementById('off-page');
            outro.style.display = "block";
        }, 5000);
    });
}

opening_from.forEach(function(elem) {
    elem.addEventListener("click", function(){
        document.body.classList.add("active-popup");
        program_taskbar.style.display = "flex";
        console.log("ola");
        popup_first_time++;
    });
});

if(open_popup_by_menu){
        open_popup_by_menu.addEventListener("click", function(){
        document.body.classList.add("active-popup");
        program_taskbar.style.display = "flex";
        console.log("ola");
        popup_first_time++;
    });
}

console.log(popup_first_time)
    
window_button.addEventListener("click", function(){
    document.body.classList.remove("active-popup");
    program_taskbar.style.display = "none";
    /* For animation purpose:
    window_button.style.borderTopColor =  "black";
    window_button.style.borderLeftColor =  "black";
    window_button.style.borderRightColor =  "white";
    window_button.style.borderBottomColor =  "white";
    setInterval(function() {document.body.classList.remove("active-popup")}, 80); */
    console.log("fechar");
    popup_first_time++;
});

help_window_button.addEventListener("click", function(){
    document.body.classList.remove("active-help-popup");
    /*program_taskbar.style.display = "none";*/
    program_help_taskbar.style.display = "none";
    console.log("fechar");
    popup_first_time++;
});

if(window_taskbar){
    window_taskbar.addEventListener("click", function(){
    
        // add style
        window_taskbar.style.backgroundColor = "#dddbde";
        window_taskbar.style.borderTopColor =  "black";
        window_taskbar.style.borderLeftColor =  "black";
        window_taskbar.style.borderRightColor =  "white";
        window_taskbar.style.borderBottomColor =  "white";

        window_button.style.borderTopColor =  "white";
        window_button.style.borderLeftColor =  "white";
        window_button.style.borderRightColor =  "black";
        window_button.style.borderBottomColor =  "black";

        document.body.classList.add("active-popup");
        document.getElementsByClassName(".open-window").style.display = "flex";
        popup_first_time++;
    });
};

document.querySelector(".window .window-button").addEventListener("click", function(){

    // add style
    window_taskbar.style.backgroundColor = "#c6c6c6";
    window_taskbar.style.borderTopColor =  "white";
    window_taskbar.style.borderLeftColor =  "white";
    window_taskbar.style.borderRightColor =  "black";
    window_taskbar.style.borderBottomColor =  "black";

    window_button.style.borderTopColor =  "black";
    window_button.style.borderLeftColor =  "black";
    window_button.style.borderRightColor =  "white";
    window_button.style.borderBottomColor =  "white";

    if(popup_first_time<=1){
        /*document.body.classList.remove("active-popup");*/
    }
    
});

// open and close vertical menu

const btn = document.querySelector(".start-button");  
const dropMenu = document.querySelector(".drop-menu");

btn.addEventListener('click', function(){
    btn.classList.add('active');
    dropMenu.classList.add('active');
    btn.style.borderTopColor =  "black";
    btn.style.borderLeftColor =  "black";
    btn.style.borderRightColor =  "white";
    btn.style.borderBottomColor =  "white";
    console.log(dropMenu);
});

window.onclick = (e) => {
    if (!e.target.matches('.start-button-text') && !e.target.matches('.start-icon-img')) { // this is wrong but it's kinda working right now, the best would be activate the div instead these elements
        dropMenu.classList.remove('active');
        btn.style.borderTopColor =  "white";
        btn.style.borderLeftColor =  "white";
        btn.style.borderRightColor =  "black";
        btn.style.borderBottomColor =  "black";
    }
};

// get current date 

function calculates_time() {
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
    }
    
    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let time = h + ":" + m;
    document.getElementById("current-time").innerHTML = time;
    setInterval('calculates_time()', 1000);
}