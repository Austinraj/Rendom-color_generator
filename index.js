const contEl = document.querySelector
(".container");

for (let index = 0; index< 30; index++)
{
    const colorcontEl= document.
    createElement("div");

    colorcontEl.classList.add("color-container");

    contEl.appendChild(colorcontEl);
}

const colorcontEls = document.querySelectorAll
(".color-container");

generateColors();

function generateColors(){
    colorcontEls.forEach((colorcontEl)=>{
        const newcolorcode = randomColor();
        colorcontEl.style.backgroundColor ="#" + newcolorcode;
        colorcontEl.innerText = "#" + newcolorcode;

    });

}

function randomColor(){
    const chars = "0123456789abcdef"
    const colorCodeLength = 6;
    let colorCode ="";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random()*
chars.length);
        colorCode += chars.substring(randomNum,randomNum+ 1);
      
    }
    return colorCode;
}