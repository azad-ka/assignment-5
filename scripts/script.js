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

document.getElementById('btn-card-one').addEventListener('click', function(event){
    alert('Board Updated Successfully');
    event.target.disabled = true;
    const reduction = getInnerTextById("assigned");
    const newAssigned = reduction - 1;
    setInnerTextByIdAndValue("assigned", newAssigned);
    const add = getInnerTextById("add-nav");
    const newAdd = add + 1 ;
    setInnerTextByIdAndValue("add-nav",newAdd);
})
document.getElementById('btn-card-two').addEventListener('click', function(event){
    alert('Board Updated Successfully');
    event.target.disabled = true;
    const reduction = getInnerTextById("assigned");
    const newAssigned = reduction - 1;
    setInnerTextByIdAndValue("assigned", newAssigned);
    const add = getInnerTextById("add-nav");
    const newAdd = add + 1 ;
    setInnerTextByIdAndValue("add-nav",newAdd);
})
document.getElementById('btn-card-three').addEventListener('click', function(event){
    alert('Board Updated Successfully');
    event.target.disabled = true;
    const reduction = getInnerTextById("assigned");
    const newAssigned = reduction - 1;
    setInnerTextByIdAndValue("assigned", newAssigned);
    const add = getInnerTextById("add-nav");
    const newAdd = add + 1 ;
    setInnerTextByIdAndValue("add-nav",newAdd);
})
document.getElementById('btn-card-four').addEventListener('click', function(event){
    alert('Board Updated Successfully');
    event.target.disabled = true;
    const reduction = getInnerTextById("assigned");
    const newAssigned = reduction - 1;
    setInnerTextByIdAndValue("assigned", newAssigned);
    const add = getInnerTextById("add-nav");
    const newAdd = add + 1 ;
    setInnerTextByIdAndValue("add-nav",newAdd);
})
document.getElementById('btn-card-five').addEventListener('click', function(event){
    alert('Board Updated Successfully');
    event.target.disabled = true;
    const reduction = getInnerTextById("assigned");
    const newAssigned = reduction - 1;
    setInnerTextByIdAndValue("assigned", newAssigned);
    const add = getInnerTextById("add-nav");
    const newAdd = add + 1 ;
    setInnerTextByIdAndValue("add-nav",newAdd);
})
document.getElementById('btn-card-six').addEventListener('click', function(event){
    alert('Board Updated Successfully');
    alert('Congrats!!! You have completed all the current task')
    event.target.disabled = true;
    const reduction = getInnerTextById("assigned");
    const newAssigned = reduction - 1;
    setInnerTextByIdAndValue("assigned", newAssigned);
    const add = getInnerTextById("add-nav");
    const newAdd = add + 1 ;
    setInnerTextByIdAndValue("add-nav",newAdd);
})

