/*------------Toggle menu to close and back------------*/

function toggleMenu() {
    var menu = document.querySelector('.menu');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    }
    else {
        menu.classList.add('open');
    }
}

/*---------------------------------------------------------------*/

/*------------  Window Resize  ------------*/

var height = window.innerHeight;
console.log(height);

window.onload = function () {
    document.getElementById('allIn').classList.remove('hideBottom');
    calcWidth();
}

window.onresize = calcWidth;

function calcWidth() {
    var widthSetting = document.getElementsByTagName('html')[0];
    var width = window.innerWidth;
    height = innerHeight;
    widthSetting.style.cssText = "--dist-from-side--25: " + calcWidth25(width) + "px;" + "--height-from-top--allIn: " + calcHeightAllIn(width) + "px;" + "height: " + height + "px;";
}

function calcWidth25(width) {
    if (width < 1520) {
        if (width < 808) {
            return 20;
            document.querySelector('#allIn').style.marginRight = "20px";
        }
        else {
            var distFromSide = (width - 768) / 2;
            return distFromSide;
        }
    }
    else {
        var distFromSide = width * 0.25;
        return distFromSide;
    }
}

function calcHeightAllIn(width) {
    if (width < 1050) {
        return 70;
    }
    else {
        return 36;
    }
}

/*-----------------------------------------*/