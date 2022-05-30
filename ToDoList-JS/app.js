const list= document.getElementById("list");
const input= document.getElementById("input");


let toDo=[];
let id;



const Save = (event) => {
    event.preventDefault();
    itemValue= input.value;
    if(!itemValue) return;
    const itemNew= document.createElement("div");
    itemNew.classList.add("todo", "Circular");           
    itemNew.addEventListener('click', changeTaskState);
    itemNew.textContent = itemValue;
    list.appendChild(itemNew);
    toDo.push(itemNew);
    id= toDo.indexOf(itemNew);
    console.log(id);
};

const changeTaskState = (event) => {
  event.target.classList.toggle('done');
};
