const headerEI = document.querySelector("header");
window.addEventListener('scroll', function(){
    const browerScrollY = this.window.pageYOffset;
    if(browerScrollY > 0){
        headerEI.classList.add("active");
    } else {
        headerEI.classList.remove("active");
    }
})