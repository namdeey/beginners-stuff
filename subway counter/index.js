let countEL = document.getElementById("count-el")
console.log(countEL)
let count = 0
function increment(){
    count += 1
    countEL.textContent= count
    console.log(countEL.textContent)
}
let saveEL= document.getElementById("save-el")

function save(){
    
    countDash=  count + " - "
    
    saveEL.textContent += countDash
    countEL.textContent= 0
    count= 0
    console.log(saveEL.textContent)
}