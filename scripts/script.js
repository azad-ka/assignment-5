document.getElementById('btn-nav').addEventListener('click', function(){

    window.location.href = "./blogs.html";
})

document.getElementById('btn-random-color').addEventListener('click', function(){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
})