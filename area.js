const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const calculateButton = document.querySelector("#button")
const outputs = document.querySelector("#output")

function calculateArea(b ,h){
    const area = 1/2 * (b * h);
    return area; 
}
function finalArea(){
    const area = calculateArea(Number(input1.value),Number(input2.value))
    outputs.innerText = "Area is" + area;
}
 
calculateButton.addEventListener("click", finalArea)