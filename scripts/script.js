// main page and blogs page link

document.getElementById('btn-nav').addEventListener('click', function () {
    window.location.href = "./blogs.html";
})

// random color 

document.getElementById('btn-random-color').addEventListener('click', function () {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
})

// set current date

let currentDate = new Date();
let dateTime = currentDate.toDateString();
document.getElementById('current-date').innerHTML = dateTime;

// completed button click add event listener

// card-1
document.getElementById('btn-card-one').addEventListener('click', function (event) {
    alert('Board Updated Successfully');
    event.target.disabled = true;
    const reduction = getInnerTextById("assigned");
    const newAssigned = reduction - 1;
    setInnerTextByIdAndValue("assigned", newAssigned);
    const add = getInnerTextById("add-nav");
    const newAdd = add + 1;
    setInnerTextByIdAndValue("add-nav", newAdd);
    const container = document.getElementById("added-element");
    const div = document.createElement("div");
    div.classList.add("bg-[rgba(244,247,255,1)]")
    div.innerHTML = `
        <p class="mt-2 p-2 rounded-xl font-medium">you have completed the task Fix Mobile button issue at 1:26:53 am</p>
    `
    container.appendChild(div);
})

// card-2
document.getElementById('btn-card-two').addEventListener('click', function (event) {
    alert('Board Updated Successfully');
    event.target.disabled = true;
    const reduction = getInnerTextById("assigned");
    const newAssigned = reduction - 1;
    setInnerTextByIdAndValue("assigned", newAssigned);
    const add = getInnerTextById("add-nav");
    const newAdd = add + 1;
    setInnerTextByIdAndValue("add-nav", newAdd);
    const container = document.getElementById("added-element");
    const div = document.createElement("div");
    div.classList.add("bg-[rgba(244,247,255,1)]")
    div.innerHTML = `
        <p class="mt-2 p-2 rounded-xl font-medium">you have completed the task Add Dark Mode at 1:26:53 am</p>
    `
    container.appendChild(div);
})

// card-3
document.getElementById('btn-card-three').addEventListener('click', function (event) {
    alert('Board Updated Successfully');
    event.target.disabled = true;
    const reduction = getInnerTextById("assigned");
    const newAssigned = reduction - 1;
    setInnerTextByIdAndValue("assigned", newAssigned);
    const add = getInnerTextById("add-nav");
    const newAdd = add + 1;
    setInnerTextByIdAndValue("add-nav", newAdd);
    const container = document.getElementById("added-element");
    const div = document.createElement("div");
    div.classList.add("bg-[rgba(244,247,255,1)]")
    div.innerHTML = `
        <p class="mt-2 p-2 rounded-xl font-medium">you have completed the task Optimize Home Page at 1:26:53 am</p>
    `
    container.appendChild(div);
})

// card-4
document.getElementById('btn-card-four').addEventListener('click', function (event) {
    alert('Board Updated Successfully');
    event.target.disabled = true;
    const reduction = getInnerTextById("assigned");
    const newAssigned = reduction - 1;
    setInnerTextByIdAndValue("assigned", newAssigned);
    const add = getInnerTextById("add-nav");
    const newAdd = add + 1;
    setInnerTextByIdAndValue("add-nav", newAdd);
    const container = document.getElementById("added-element");
    const div = document.createElement("div");
    div.classList.add("bg-[rgba(244,247,255,1)]")
    div.innerHTML = `
        <p class="mt-2 p-2 rounded-xl font-medium">you have completed the task Add New Emoji at 1:26:53 am</p>
    `
    container.appendChild(div);
})

// card-5
document.getElementById('btn-card-five').addEventListener('click', function (event) {
    alert('Board Updated Successfully');
    event.target.disabled = true;
    const reduction = getInnerTextById("assigned");
    const newAssigned = reduction - 1;
    setInnerTextByIdAndValue("assigned", newAssigned);
    const add = getInnerTextById("add-nav");
    const newAdd = add + 1;
    setInnerTextByIdAndValue("add-nav", newAdd);
    const container = document.getElementById("added-element");
    const div = document.createElement("div");
    div.classList.add("bg-[rgba(244,247,255,1)]")
    div.innerHTML = `
        <p class="mt-2 p-2 rounded-xl font-medium">you have completed the task Integrate OpenAI API at 1:26:53 am</p>
    `
    container.appendChild(div);
})

// card-6
document.getElementById('btn-card-six').addEventListener('click', function (event) {
    alert('Board Updated Successfully');
    alert('Congrats!!! You have completed all the current task')
    event.target.disabled = true;
    const reduction = getInnerTextById("assigned");
    const newAssigned = reduction - 1;
    setInnerTextByIdAndValue("assigned", newAssigned);
    const add = getInnerTextById("add-nav");
    const newAdd = add + 1;
    setInnerTextByIdAndValue("add-nav", newAdd);
    const container = document.getElementById("added-element");
    const div = document.createElement("div");
    div.classList.add("bg-[rgba(244,247,255,1)]")
    div.innerHTML = `
        <p class="mt-2 p-2 rounded-xl font-medium">you have completed the task Improve Job Searching at 1:26:53 am</p>
    `
    container.appendChild(div);
})

// remove element from added file

document.getElementById('history').addEventListener('click', function(){
    document.getElementById('added-element').innerHTML = "";
})