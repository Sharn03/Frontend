
let resultdiv = document.createElement('div');
   resultdiv.id = 'result';
   document.querySelector('.container').appendChild(resultdiv);
const button = document.querySelector(".btn");
button.addEventListener('click',displayStats);
function displayStats()
{
  
    const input = document.getElementById("input")
   const city = input.options[input.selectedIndex].value;
   
   let population = 0;
   let language = " ";
   let literacyrate = 0;
    switch(city)
    {
        case 'banglore':
            {
                population = 1000;
                language = "Kannada";
                literacyrate = 90;
                break;
            }
            case 'chennai':
                {
                    population = 2000;
                    language = "Tamil";
                    literacyrate = 100;
                    break;
                }
                case 'mumbai':
                    {
                        population = 3000;
                        language = "Hindi";
                        literacyrate = 200;
                        break;
                    }
                    case 'delhi':
                        {
                            population = 4000;
                            language = "Marathi";
                            literacyrate = 300;
                            break;
                        }

            
    }
    let text = `Indian city of ${city} has a population of ${population}. Language spoken is ${language} and Literacy rate is ${literacyrate}%`;
   
   document.getElementById('result').innerHTML = text;

}
