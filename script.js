// Hero表示

window.addEventListener("load", () => {

document.querySelector(".hero").style.opacity = "1";

});



// スクロールフェード

const fade = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

fade.forEach(el=>observer.observe(el));