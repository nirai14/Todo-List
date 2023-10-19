let button=document.getElementById('add')
let input=document.getElementById('input')
let todoList=document.getElementById('todoList')
let todos=[]
 window.onload=()=>{
  todos=JSON.parse (localStorage.getItem('sup'))||[]
 todos.forEach(todo=>addItem(todo))
 }
 
button.addEventListener("click",()=>{
    todos.push(input.value)
    localStorage.setItem("sup",JSON.stringify(todos))
    console.log(todos);
    addItem(input.value)
    input.value=""
   
})
function addItem(item){
    let para=document.createElement("p")
    para.innerText=item
    todoList.appendChild(para)
 

    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(item)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(item)
    })
}
function remove(item){
    let index=todos.indexOf(item)
   
    if(index>-1){
todos.splice(index,1)
    }
    localStorage.setItem("sup",JSON.stringify(todos))
}
