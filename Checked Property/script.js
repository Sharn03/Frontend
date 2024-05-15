const checkboxbtn = document.getElementById("myCheckBox")
const visaBtn = document.getElementById("visaBtn")
const masterBtn = document.getElementById("MasterBtn")
const paypalBtn = document.getElementById("paypal")
const sumbitBtn = document.getElementById("sumbitBtn")
 const mysubscribedresult = document.getElementById("mysubresult")
 const payment = document.getElementById("payment")

 function display()
 {
    if(checkboxbtn.checked)
        {
            mysubscribedresult.innerText = 'You are subscribed'
        }
        else
        {
            mysubscribedresult.innerText = 'You are Not subscribed'
        }

        if(visaBtn.checked)
            {
                payment.innerText = 'Visa Card '
            }
            else if(masterBtn.checked)
            {
              payment.innerText = 'Mastercard'
            }
            else if(paypalBtn.checked)
                {
                    payment.innerText = 'Mastercard'
                }
                else 
                    {
                        payment.innerText = 'Pls select the Payment Optionf
                        '
                    }
 }