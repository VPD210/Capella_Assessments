// The following function was created to preload the images onto the page. It creates an
// array of the images that are used.

function preload(images) {
    if (document.images) {
        var i = 0;
        var imageArray = new Array();
        imageArray = images.split(',');
        var imageObj = new Image();
        for(i=0; i<=imageArray.length-1; i++) {
            document.write(`<img src="${imageArray[i]}" />`);
            imageObj.src=imageArray[i];
        }
    }
}

// The following javascript creates the loop of the images to shuffle through when the banner
// rotates.  It creates a set interval, banner loop, and and banner Timer.  The timer was set a 3000
// which the html reads a 3 seconds.  Each image has its own function called bannerloop that tells the 
// html to rotate the images. 

var bannerstatus = 1;
var bannerTimer = 3000;

window.onload = function() {
    bannerloop();
}

var startban = setInterval(function() {
   bannerloop();
}, bannerTimer);

document.getElementById("banner").onmouseenter = function() {
    clearInterval("startban");
}

document.getElementById("banner").onmouseleave = function() {
    startban = setInterval(function() {
        bannerloop();
     }, bannerTimer);
} 

document.getElementById("imgbanbtn-prev").onclick = function() {
    if (bannerstatus === 1) {
        bannerstatus = 2;
    }
    else if (bannerstatus === 2) {
        bannerstatus = 3;
    }
    else if (bannerstatus === 3) {
        bannerstatus = 1;
    }
    bannerloop();
}

document.getElementById("imgbanbtn-next").onclick = function() {
   bannerloop(); 
}

function bannerloop() {
    if (bannerstatus === 1) {
        document.getElementById("banimg2").style.opacity = "0"; 
        setTimeout(function() {
            document.getElementById("banimg1").style.right = "0px";
            document.getElementById("banimg1").style.zIndex = "1000";
            document.getElementById("banimg2").style.right = "-1200px";
            document.getElementById("banimg2").style.zIndex = "1500";
            document.getElementById("banimg3").style.right = "1200px";
            document.getElementById("banimg3").style.zIndex = "500"; 
        }, 500);
        setTimeout(function() {
            document.getElementById("banimg2").style.opacity = "1"; 
        }, 1000);
        bannerstatus = 2;
    }
    else if (bannerstatus === 2) {
        document.getElementById("banimg3").style.opacity = "0"; 
        setTimeout(function() {
            document.getElementById("banimg2").style.right = "0px";
            document.getElementById("banimg2").style.zIndex = "1000";
            document.getElementById("banimg3").style.right = "-1200px";
            document.getElementById("banimg3").style.zIndex = "1500";
            document.getElementById("banimg1").style.right = "1200px";
            document.getElementById("banimg1").style.zIndex = "500"; 
        }, 500);
        setTimeout(function() {
            document.getElementById("banimg3").style.opacity = "1"; 
        }, 1000);
        bannerstatus = 3;
    }
    else if (bannerstatus === 3) {
        document.getElementById("banimg1").style.opacity = "0"; 
        setTimeout(function() {
            document.getElementById("banimg3").style.right = "0px";
            document.getElementById("banimg3").style.zIndex = "1000";
            document.getElementById("banimg1").style.right = "-1200px";
            document.getElementById("banimg1").style.zIndex = "1500";
            document.getElementById("banimg2").style.right = "1200px";
            document.getElementById("banimg2").style.zIndex = "500"; 
        }, 500);
        setTimeout(function() {
            document.getElementById("banimg1").style.opacity = "1"; 
        }, 1000);
        bannerstatus = 1;
    }
}