const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerSet = 'abcdefghijklmnopqrstuvwxyz'
const numberSet = '1234567890'
const symbolSet = '!@#$%^&*()_'

const passBox = document.getElementById('pass-box')
const totalchar = document.getElementById('total-char')
const upperCase = document.getElementById('upper-case')
const lowerCase = document.getElementById('lower-case')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')



const randomData = (dataset) => {
     return dataset[Math.floor(Math.random() * dataset.length)]
}

const generatePassword = (password = "") => {
    if (upperCase.checked) {
        password += randomData(upperSet)
    }if (lowerCase.checked) {
        password += randomData(lowerSet)
    }if (numbers.checked) {
        password += randomData(numberSet)
    }if (symbols.checked) {
        password += randomData(symbolSet)
    }if (password.length < totalchar.value) {
        return generatePassword(password)
    }
    passBox.innerHTML = truncateString(password, totalchar.value);
}
document.getElementById('btn').addEventListener('click', function(){
    generatePassword()
})

function truncateString(str, num){
    if (str.length > num ) {
        let subStr = str.substring(0, num)
        return subStr;
    }else{
        return str;
    }
}