var tabs = document.getElementsByClassName("tabs");
var pages = ["home", "about", "products", "contacts"];

for (var a = 0; a < tabs.length; a++) {
    document.getElementById(pages[a]).style.display = "none";
}

document.getElementById("home").style.display = "block";

for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function (index) {
        return function () {
            console.log(index);
            for (var a = 0; a < tabs.length; a++) {
                document.getElementById(pages[a]).style.display = "none";
            }
            document.getElementById(pages[index]).style.display = "block";
        }
    }(i);
}


var slideIndex = 1;
showSlides(slideIndex, 0);
showSlides(slideIndex, 1);
showSlides(slideIndex, 2);

function plusSlides(n, a) {
    showSlides(slideIndex += n, a);
}

function showSlides(n, a) {
    var i;
    var slides = document.getElementsByClassName("slidecon")[a].getElementsByClassName("slides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}
