const inputs = document.querySelector(".inputs")
const calculateButton = document.querySelector("#button")
const outputs = document.querySelector("#output")

function calculateArea(b ,h){
    const area = 1/2 * (b * h);
    return area; 
}
function finalArea(){
    const area = calculateArea(Number(inputs[0].value),Number(inputs[1].value))
    outputs.innerText = "Area is" + area;
}
 
calculateButton.addEventListener("click", finalArea)