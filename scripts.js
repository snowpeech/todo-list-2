let toDo = [];
var itemID=0;
let showTasks = document.querySelector("#display");

function add () {
	let task = document.querySelector('#inTask'); 
	itemID++;
		//can make task = #inTask.value or #inTask, and leave .value to the push fn

	toDo.push({ "tasko"	: task.value, "id":itemID});

	console.log(toDo);

	refreshList();
}

function refreshList(){
	showTasks.innerHTML = '';

	for (var i = 0; i < toDo.length; i++) {
		showTasks.innerHTML = showTasks.innerHTML + "<BR>" + toDo[i].tasko + `<button class="kill" onclick="remove(${i})">X</button>` 
	}

	document.querySelector("#inTask").value ="";
}

function remove(index) {

    toDo.splice(index, 1);

    refreshList();

 }
