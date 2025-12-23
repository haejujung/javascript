const headerEI = document.querySelector("header");
window.addEventListener('scroll', function(){
    this.requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browerScrollY > 0 ){
        headerEI.classList.add("active");
    } else {
        headerEI.classList.remove("active");
    }
}