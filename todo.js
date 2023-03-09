document.getElementById("txt").addEventListener("input", function() {
    document.getElementById("plus").style.visibility = "visible";
});
let todos = [];
let isAllChecked = false;
function addTodo(text) {
    todos.push({
        text: text,
        checked: false
    });
}
function renderTodos(todos) {
    var html = todos.map((todo, index) => {
        let strikeThrough = '';
        let circleFileName = 'circle2.png';
        if (todo.checked) {
            strikeThrough = 'strike-through';
            circleFileName = 'check-mark.png';
        }
        return '<div class="todo">' +
            '<img class="cl" src="' + circleFileName + '" data-id="' + index + '" onClick="toggleCheck(event)">' +
            '<span id="span-txt" class="' + strikeThrough + '">' + todo.text + '</span>' +
            '<img class="clo" src="cancel-24px.png" data-id="' + index + '" onClick="deleteTodo(event)">' +
            '</div>';
    });
    document.getElementById('todo-cont').innerHTML = html.join('');
    document.getElementById("count").innerHTML = todos.filter(todo => todo.checked === false).length;
    document.getElementById("txt").value = "";
    document.getElementById("plus").style.visibility = "hidden";
/* *****************Collect todo window****************** */
    let content = document.getElementById("todo-cont").innerHTML;
    (content === "" ? document.getElementById("cont").style.display = "none" : document.getElementById("cont").style.display = "block");
} 
// ================= Add Todo list =============
document.getElementById("txt").addEventListener("keypress", function(ent) {
    if (ent.key === "Enter") {
        const text = document.getElementById("txt").value;
        if (text === '') {
                return alert("You must enter new Todo List");
        }
        addTodo(text);
        renderTodos(todos);
        document.getElementById("cont").style.display = "block";
    }
});
document.getElementById("plus").addEventListener("click", function() {
    const text = document.getElementById("txt").value;
    if (text === '') {
        return;
    }
    addTodo(text);
    renderTodos(todos);
    document.getElementById("cont").style.display = "block";
});
// ================= Check box =============
function toggleCheck(event) {
    const index = event.target.getAttribute('data-id');
    todos[index].checked = !todos[index].checked;
    renderTodos(todos);
}
// ================= Delete Todo list =============
function deleteTodo(event) {
    const index = event.target.getAttribute('data-id');
    todos.splice(index, 1);
    renderTodos(todos);
};
// ================= Clear Checked boxes =============
function clearChecked(list) {
    todos = list.filter(todo => !todo.checked);
    renderTodos(todos);
};
// ================= Check done & all tasks =============
 document.getElementById("done").addEventListener("click", alldone1);
 function alldone1() {
     isAllChecked = !isAllChecked;
    for(todo in todos){
        todos[todo].checked = isAllChecked;
		if (!todos[todo].checked) {
            document.getElementById("done").style.opacity = 0.5;
		} else{
            document.getElementById("done").style.opacity = 1;
		}
	}	
	renderTodos(todos);
}
// ================= Filter Tasks =============
    document.getElementById("sp4").addEventListener("click",function all() {
        renderTodos(todos);
});
function uncompleteChecked(uncomple) {
        renderTodos(uncomple.filter(todo => todo.checked === false));
}
function completeChecked(comple) {
        renderTodos(comple.filter(todo => todo.checked === true));
}
  