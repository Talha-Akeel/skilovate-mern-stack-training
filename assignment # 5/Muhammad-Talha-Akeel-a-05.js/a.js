const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const tasks = [];

function addTasks(){
    r1.question("Enter the task ( OR Enter 'exit' to exit ) : ", (task) => {
        if(task !== "exit"){
            tasks.push({task, completed:false});
            // console.log(tasks[0].task);
            // console.log(tasks[0].completed);
            addTasks();
        }else{
            toDoList();
        }
        
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function viewTasks(){
    if(tasks.length === 0){
      console.log("No tasks found");
    }else{
      for(let i=0; i<tasks.length; i++){
        let status = tasks[i].completed;
        if(tasks[i].completed === true){
          status = "Task Completed";
        }else{
          status = "Task Uncompleted";
        }
        console.log(`${i+1}- ${tasks[i].task} (${status})`);
      }
    }
    toDoList();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function markTasks(){
  r1.question("Enter the task name to mark it complete (OR enter 'exit') to exit : ", (task) => {
    if(task !== "exit"){
    for(let i=0; i<tasks.length; i++){
      if(task === tasks[i].task){
        tasks[i].completed = true;
        console.log("Task is marked as completed.");
      }
    }
  }else{
    toDoList();
  }
  markTasks();
});
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function deleteTasks(){
  r1.question("Enter the task name to delete it (OR enter 'exit') to exit : ", (task) => {
    if(task !== "exit"){
    for(let i=0; i<tasks.length; i++){
      if(task === tasks[i].task){
        tasks.splice([i],1);
        console.log("Task is deleted");
      }
    }
  }else{
    toDoList();
  }
  deleteTasks();
});
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function toDoList(){

    console.log("Welcome to the To-Do List Application!");
    console.log("");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Mark as Completed");
    console.log("4. Delete Task");
    console.log("5. Exit");

    r1.prompt();

    r1.question("Please choose an option (1-5): ", (option) => {
        switch (option) {
            case '1':
              addTasks();
              break;
            case '2':
              viewTasks();
              break;
            case '3':
              markTasks();
              break;
            case '4':
              deleteTasks();
              break;
            case '5':
              console.log('Exiting...');
              r1.close();
              break;
            default:
              console.log('Invalid choice. Please try again.');
          }
    });
}

toDoList();