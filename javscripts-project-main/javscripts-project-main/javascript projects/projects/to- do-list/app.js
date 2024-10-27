const input = document.querySelector('#input-box')
const inputbtn = document.querySelector('.btn')
const container1 = document.querySelector('.list-conatiner')

inputbtn.addEventListener('click', (e) => {
    validatetask(input.value)
    input.value = ''
})

function validatetask(task){
    if (task === '') {
        alert('please enter your task')
    }else{
        let li = document.createElement('li')
        li.innerHTML = `${input.value}`
        container1.appendChild(li)
        
        let span = document.createElement('span')
        span.textContent = '\u00d7'
        li.appendChild(span)
    }
    saveData()
}

container1.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked')
        saveData()
    }else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData() {
    localStorage.setItem("tasks", container1.innerHTML)
}

function showData(){
    container1.innerHTML = localStorage.getItem("tasks")
}
showData()