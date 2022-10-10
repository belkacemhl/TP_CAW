
// -------------  EXO 01  ------------- 
/* window.onload = function() {
    document.getElementById('boundary1').addEventListener(
        "mouseover" , overSingleBoundary)
};

function overSingleBoundary() {
    document.getElementById('boundary1').addClassName("youlose");
} */


// -------------  EXO 02  ------------- 
var overBoundary = false; //EXO 03
window.onload = function() {
    document.getElementById('end').addEventListener(
        "mouseover" , End); //EXO 03
    document.getElementById('start').addEventListener(
        "click" , Start); //EXO 04    
    var x = document.getElementsByClassName("boundary");
    for(var i = 0 ; i < x.length ; i++) {
        x[i].addEventListener(
            "mouseover" , overAllBoundary)
    }
    document.getElementById('maze').addEventListener(
        "mouseleave" , antiCheating); //EXO 07
    
};

function overAllBoundary() {
    overBoundary = true; //EXO 03
    var x = document.getElementsByClassName("boundary");
    for(var i = 0 ; i < x.length ; i++) {
        x[i].addClassName("youlose");
    }
}

// -------------  EXO 03  ------------- 
function End() {
    if(overBoundary) {
        alert("You Lost ! Click On S to Try Again ...");
    } else {
        alert("You win !");
    }
}


// -------------  EXO 04  ------------- 
function Start() {
    overBoundary = false;
    var x = document.getElementsByClassName("boundary");
    for(var i = 0 ; i < x.length ; i++) {
        x[i].removeClassName("youlose");
    }
    document.getElementById('status').textContent = "Move your mouse over the S to begin."; //EXO 06

}

// -------------  EXO 06  ------------- 
function End() {
    if(overBoundary) {
        document.getElementById('status').textContent = "You Lost ! Click On S to Try Again ...";
    } else {
        document.getElementById('status').textContent = "You win !";
    }
}


// -------------  EXO 07  ------------- 
function antiCheating() {
    var x = document.getElementsByClassName("boundary");
    for(var i = 0 ; i < x.length ; i++) {
        x[i].addClassName("youlose");
    }
    document.getElementById('status').textContent = "Don't Cheat ! Click On S to Try Again ...";
}
