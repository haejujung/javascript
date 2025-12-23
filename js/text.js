const spanEI = document.querySelector("main h2 span");
const txtArr = ['web publisher', 'front-end develpoer', 'web ui designer', 'ux designer', 'back-end developer'];
let index = 0;
let currentTxt = txtArr[index].split("");

function writeTxt(){
    spanEI.textContent += currentTxt.shift();
    if(currentTxt.length != 0){
        setTimeout(writeTxt, Math.floor(Math.random()*100));
    } else {
        currentTxt = spanEI.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }
}

function deleteTxt(){
    currentTxt.pop();
    spanEI.textContent = currentTxt.join("");
    if(currentTxt.length != 0){
        setTimeout(deleteTxt, Math.floor(Math.random()*100));
    } else {
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
    }
}