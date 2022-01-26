"use strict";

var sections = document.getElementsByTagName('section');
var songs = document.getElementsByTagName("audio");
var damienLisa = document.getElementsByClassName("damien-lisa");
var neon = document.getElementsByClassName("neon");
var closer = document.getElementsByClassName("closer");
// Funkcijos
function display(id, num){
    for (var x of sections) {
        x.classList.add("displayNone")
    }

    for(var i = 0; i < songs.length; i++){
        songs[i].muted = true;
        songs[i].pause();
    }

    if(num == 0){
        loadImage(damienLisa);
        setTimeout(function(){
            document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")';
        }, 200)
    } else if(num ==1){
        loadImage(neon);
        setTimeout(function () {
            document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1459233313842-cd392ee2c388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")';
        }, 200)
    } else if (num == 2){
        loadImage(closer);
        setTimeout(function () {
            document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1445375011782-2384686778a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")';
        }, 200)
    }

    songs[num].play();
    songs[num].muted = false;
    mute()
    
    var element = document.getElementById(id);
    setTimeout(function(){
        element.classList.remove("displayNone");
        setTimeout(function(){
            element.style.opacity = 1;
            document.getElementById("mute-label").style.opacity = 0.7;
            
        }, 500);
    }, 500);
};

function loadImage(artist){
    setTimeout(function () {
        artist[0].style.opacity = 1;
        loadTitle(0);
    }, 1500)

    setTimeout(function () {
        artist[1].style.opacity = 1;
        loadTitle(1);
    }, 2500)

    setTimeout(function () {
        artist[2].style.opacity = 1;
        loadTitle(2);
    }, 3500)
};

function load(){
    setTimeout(function(){
        document.getElementsByTagName('h1')[0].style.transform = "translateY(0%)";
    },400)
    var buttons = document.getElementsByTagName("button");
    setTimeout(function(){
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.opacity = 1;
        }
    }, 3000)
};

function mute(){
    var soundButton = document.getElementById("mute");

    if(soundButton.checked == true){
        for(var x of songs){
            x.muted = true;
            document.getElementById("mute-label").style.backgroundImage = "url('mute.svg')"
        };
    } else {
        for (var x of songs) {
            x.muted = false;
            document.getElementById("mute-label").style.backgroundImage = "url('unmute.svg')"
        };
    };
};

function loadTitle(artist){
    document.getElementsByTagName("h2")[artist].style.opacity = 1;
    document.getElementsByTagName("h2")[artist].style.transform = "translateY(0px)";
}

// Pradžia
load()