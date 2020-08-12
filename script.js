document.querySelector('.controlls_submit').addEventListener('click', addTask);
document.querySelector('.task-list').addEventListener('click', removeTask);
let MyFuncCalls =  0;
let MyFuncCallsDiv = 'todo_';
function addTask() {
	MyFuncCalls++;
	let text = document.querySelector('.controlls_add-task').value;
	
	let oldHtml = document.querySelector('.task-list').innerHTML;
	document.querySelector('.task-list').innerHTML = `${oldHtml}<div class = ${MyFuncCallsDiv + MyFuncCalls}>${text}<div><button id = ${MyFuncCalls}>delete`;
	document.querySelector('.controlls_add-task').value = '';
} 
function removeTask(event){
	debugger
	let yesdiv = event.path[2];
	yesdiv.remove();
	MyFuncCalls = 0;
	let val = document.querySelector('.task-list').children;
	let valCount = document.querySelector('.task-list').childElementCount;
	let valName = String(val[0].className);

	for(index = 0;index<=valCount;index++) {
	MyFuncCalls++;	
	val[index].ClassList.remove(valName);
	val[index].ClassList.add(MyFuncCallsDiv + MyFuncCalls);		
	}
}