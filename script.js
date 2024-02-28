const clock = document.querySelector('#clock');

setInterval(()=>{
    const getDate = new Date();
   clock.innerHTML = getDate.toLocaleTimeString();
},1000)