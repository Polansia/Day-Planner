var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");
var dateDisplay = document.querySelector("#date");
var time = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,]
var date = new Date();
var hours = date.getHours();
var day = date.getDay();
var index;
var todoId;
var task;




dateDisplay.textContent = date
renderTodos()


setInterval ( "timer()", 1000 );

function timer()
{

  var date = new Date();
  dateDisplay.textContent = date
  var currentDay = date.getDay()

  
  if (currentDay != day){
  localStorage.clear(); 
  }
}

function renderTodos() {
  
  
  var index = 0;
  todoList.innerHTML = "";
  
  for (var i = 0; i < time.length; i++)
  
  {
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.id = index;
    if (input.value !== "") {
      
    }
    else{
      input.value = localStorage.getItem("todo"+index)
    }
    
  
    
    var label = document.createElement("label");

   
    
    var li = document.createElement("li");
    li.textContent = todoInput;
    li.id = "list" + i;

    var button = document.createElement("button");
    button.textContent = "+";
    button.id = index;


    

    li.appendChild(label);
    li.appendChild(button);
    li.appendChild(input);
    todoList.appendChild(li);
    
    if (hours < 12){
      if (index > hours )
      document.getElementById("list" + i).style.background = "green";
      else{
      document.getElementById("list" + i).style.background = "red";
      }
      
    }
    else{
      if (index > hours )
      document.getElementById("list" + i).style.background = "green";
      else{
      document.getElementById("list" + i).style.background = "red";
      }

    }

    if (index < 12){
      label.textContent = time[index] + "AM"
      

    }
    else{
      
      label.textContent = time[index] + "PM"
      
    }
    index++

 
    
  }
 
  
}



todoList.addEventListener("click", function(event) 
{
  var element = event.target;
  

  if (element.matches("button") === true)
  
  {
   
    var todoInput = element.nextElementSibling;
    var todoId = todoInput.id
    var task = todoInput.value
    
 
    if (task === "") {
      return;
    }


    localStorage.setItem("todo" + todoId, task);

    renderTodos();
    
  }
});
function clear(){






}