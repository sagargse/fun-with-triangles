const side1 = document.querySelector("#input1")
const side2 = document.querySelector("#input2")
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")
const outputE1 = document.querySelector("#output")

// console.log(side-inputs[0].value)
function calculateSumOfSquares(a,b){
const sumOfSquares = a*a + b*b;
return sumOfSquares;
}

function calculateHypotenuse(){
    // console.log(side1.value)
    // console.log(side2.value)
    
const sumOfSquares = calculateSumOfSquares(Number(side1.value),Number(side2.value));
const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
outputE1.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);