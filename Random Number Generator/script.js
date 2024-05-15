let button = document.getElementById("button")
let display= document.querySelector(".number")
let number

function randomnumber()
{
    number = Math.floor(Math.random()*6)+1
    if(number == 1)
        {
            display.innerHTML=number
        }
        else
        {
            display.innerHTML = 0
        }
    
}