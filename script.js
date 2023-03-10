let title = document.querySelector(".title");
let head = document.querySelector(".head");
let question = document.querySelector(".questions");
let question1 = document.querySelector(".question1");
let question2 = document.querySelector(".question2");
let choice1 = document.querySelector(".choice1");
let choice2 = document.querySelector(".choice2");
let choice3 = document.querySelector(".choice3");
let choice4 = document.querySelector(".choice4");
let result = document.querySelector(".result");
let enter = document.querySelector(".enter");
let message = document.querySelector(".message");
let endimg=document.querySelector(".endimg");
let para = document.querySelector(".para");
let what = document.querySelector(".what");
let input;
let start = document.querySelector(".start");
start.onclick=function(){
document.querySelector(".start").style="display:none";
document.querySelector(".title").style="display:none";
document.querySelector(".question1").style="display:block";};
enter.onclick = function() {
    input =
        document.querySelector(".input").value;

    if (input <= 25 || input >= 25) {
        document.querySelector(".question1").style = "display:none";
        document.querySelector(".what").style = "display:block";
    } else {

        para.innerHTML = "You are an idiot sandwich!";
        document.querySelector(".gif").style = "display:block";
        document.querySelector(".question1").style = "display:none"; document.querySelector(".message").style="display:block";
         document.querySelector(".endimg").style="display:none";


    }
};
choice3.onclick = function() {   document.querySelector(".what").style="display:none";
    if (input < 25) { document.querySelector(".message").style="display:block";
        para.innerHTML = "Because you are "+input+" years old and think bread is needed on a sandwich, you are a hotdog!";
                     endimg.src="https://www.tastingtable.com/img/gallery/13-best-hot-dogs-in-america/intro-1660217636.jpg";
    } else if (input >= 25) {
document.querySelector(".message").style="display:block";
        para.innerHTML = "Because you are "+input+" years old and think bread is needed on a sandwich, you are a ham sandwich!";
        endimg.src="https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/487d5b32-2806-4a2d-8aa9-3b4e34ed06d7.jpg";
    } else {
        para.innerHTML = "You are an idiot sandwich!";
        document.querySelector(".gif").style = "display:block";
         document.querySelector(".endimg").style="display:none";
    }
};
choice4.onclick = function() {
    document.querySelector(".what").style="display:none";
    if (input < 25) {
        para.innerHTML = "Because you are "+input+" years old and think bread is not needed on a sandwich, you are a taco!";
        endimg.src="https://images-gmi-pmc.edge-generalmills.com/e59f255c-7498-4b84-9c9d-e578bf5d88fc.jpg";
document.querySelector(".message").style="display:block";
    } else if (input >= 25) {
        para.innerHTML = "Because you are "+input+" years old and think bread is not needed on a sandwich, you are a burrito!";
        endimg.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Burrito.JPG/640px-Burrito.JPG";
document.querySelector(".message").style="display:block";
    } else {
        document.querySelector(".endimg").style="display:none";
        para.innerHTML = "You are an idiot sandwich!";
        document.querySelector(".gif").style = "display:block";
    }
};