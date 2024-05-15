const minNum = 1;
const maxNum = 100;
const randNum = Math.floor(Math.random() * maxNum -minNum +1)+1;
console.log(randNum);
let running = true;
let userInput
let attempt = 0;

while(running)
    {
        userInput = window.prompt("Guess a Number from 1 to 100")
        userInput = Number(userInput) // user data will be in String

        if(isNaN(userInput))
            {
                alert("Please enter a valid number");
            }
            else if(userInput <minNum || userInput > maxNum)
                {
                    alert("Please enter number between the above mentioned range")
                }
                else
                {
                    attempt++;

                    if(userInput<randNum)
                        {
                            alert("Your guess is Too Low");
                        }
                        else if(userInput > randNum)
                            {
                                alert("Your guess is Too High");
                            }
                            else
                            {
                                alert(`Congrat! You found at ${attemp} and the Number is ${randNum}`);
                                running = false;
                            }
                }
    }