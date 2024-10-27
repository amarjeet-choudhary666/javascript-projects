const api = 'https://v6.exchangerate-api.com/v6/13a25a8752c351d12669987c/latest/USD'
const select = document.querySelector('.select1')
const select2 = document.querySelector('.select2')
const input = document.querySelector('input')
const btn = document.querySelector('.btn')
let html = '';
const api_exchange = `https://v6.exchangerate-api.com/v6/13a25a8752c351d12669987c/latest/${select.value}`

async function currencyCode(){
    const res = await fetch(api)
    const data = await res.json()
    const key = Object.keys(data.conversion_rates)

    
        key.map(item => {
            return html += `<option value=${item}>${item}</option>`
        })
        for (const arr in key) {
                select.innerHTML = html
                select2.innerHTML = html
        }
        }
    

currencyCode()


function currencyExchnage(){

}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    currencyExchnage()
})


