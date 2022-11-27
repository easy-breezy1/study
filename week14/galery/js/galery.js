let Index = 1;
showSlides (Index);

function showSlides (x) {
let i;
let slides = document.getElementsByClassName ("img");
if (x > slides.length) {Index = 1} 
if (x < 1) {Index = slides.length} 
for (i = 0; i < slides.length; i++) { 
    slides[i].style.display = "none"; 
}
slides[Index-1].style.display = "block"; 
}

function plusSlides(x) {
showSlides (Index += x);
}

