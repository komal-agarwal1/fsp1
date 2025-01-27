function addTasks()
{
    event.preventDefault();
    const task=document.getElementById('addtask');
    const taskList=document.getElementById('maintask');
    const newTaskList=document.createElement("div");
    newTaskList.className="newTaskList";
    const tasks=JSON.parse(localStorage.getItem("maintask")) || [];
    newTaskList.innerText=localStorage.getItem("maintask");
    
    // newTaskList.innerText=task.value;
    taskList.appendChild(newTaskList);
    task.value="";
    if(task)
    {
        let existingContent=JSON.parse(localStorage.getItem('maintask')) || [];
        const newTask={"task":task.value};
        existingContent.push(newTask);
        localStorage.setItem("maintask",JSON.stringify(existingContent));
    }
    else
    {
        alert('Task not inputted');
    }
}