const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')
    
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please enter the valid height ${height}`
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please enter a valid weight ${weight}`
    }else{
        const bmi = Math.round(weight / ((height*height)/10000).toFixed(2))
        if (bmi < 20) {
            results.innerHTML = `under weight: <span>${bmi}</span>`
        }else if (bmi >=20 && bmi < 40) {
            results.innerHTML = `normal range: <span>${bmi}</span>`
        }else{
            results.innerHTML = `over weight: <span>${bmi}</span>`
        }
    }

})


