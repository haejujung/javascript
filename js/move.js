const animationMove = function(querySelector){
    const targetEI = document.querySelector(Selectior);
    const browerScrollY = window.pageYOffset;
    const targetScorllY = targetEI.getBoundingClientRect().top + browerScrollY;
    window.scrollTo ({top: targetScorllY,behavior:'smooth'});
};
const scrollMoveEI = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scrollMoveEI.length; i++){
    scrollMoveEI[i].addEventListener('click',function(e){
        const target = this.dataset.target;
        animationMove(target);
    });
}