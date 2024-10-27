
const inputBtn = document.getElementById('btn')
const billAmount = document.getElementById('bill-amount')
const tipPercentage = document.getElementById('tip-percentage')
const tipAmount = document.getElementById('tip-amount')
const totalAmount = document.getElementById('total-amount')



function calculateAmount(){
    const billValue = billAmount.value;
    const tipvalue = tipPercentage.value;
    const totalValue = Math.round(billValue * (1 + tipvalue / 100)) ;
    let tipValue = billValue * (tipvalue / 100)
    
    document.getElementById('tip-amount').value = tipValue
    document.getElementById('total-amount').value = totalValue
}
inputBtn.addEventListener('click', calculateAmount)