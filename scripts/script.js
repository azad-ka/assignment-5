// main page and blogs page link

document.getElementById('btn-nav').addEventListener('click', function(){
    window.location.href = "./blogs.html";
})

// random color 

document.getElementById('btn-random-color').addEventListener('click', function(){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
})

// set current date

let currentDate = new Date();
let dateTime = currentDate.toDateString();
document.getElementById('current-date').innerHTML = dateTime;

// completed button click add event listener

document.getElementById('btn-card-one').addEventListener('click', function(){
    alert('Board Updated Successfully');
    
})