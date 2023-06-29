let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let result = document.getElementById('result')

function addNums(){
    result.innerText=parseInt(input1.value)+parseInt(input2.value)
}
function subNums(){
    result.innerText=parseInt(input1.value)-parseInt(input2.value)
}
function multNums(){
    result.innerText=parseInt(input1.value)*parseInt(input2.value)
}
function divNums(){
    result.innerText=parseInt(input1.value)/parseInt(input2.value)
}