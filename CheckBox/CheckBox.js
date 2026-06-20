const myCheckBox = document.getElementById("myCheckBox");

const visaBtn = document.getElementById("visaBtn");

const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn")

const mySubmit = document.getElementById("mySubmit");

const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are Doomed`
    }else{
        subResult.textContent = `You are not Doomed`
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `You Are Paying With Visa`
    }else if (masterCardBtn.checked) {
        paymentResult.textContent = `You are Paying With Mastercard`;
    }
    else if (payPalBtn.checked) {
        paymentResult.textContent = `You are Paying With PayPal`
    }
    else{
        paymentResult.textContent = `You Must Select the payment type`;
    }
}