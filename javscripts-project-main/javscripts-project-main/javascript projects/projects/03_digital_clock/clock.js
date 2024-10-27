const clock = document.getElementById('clock');

setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
    clock.style.display = 'flex';
    clock.style.justifyContent = 'center';
    clock.style.alignItems = 'center';
    clock.style.fontSize = '50px';
    clock.style.fontFamily = 'poppins, sans-serif';
},1000);