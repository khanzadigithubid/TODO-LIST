#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.magenta.italic("\n\t Welcome to Khanzadi Wazirali Todo-List-Project"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.green("Select an option you want to do: "),
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
//Function to add new task to the List
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List\n`);
};
//Function to view all Todo-List tasks
let viewTask = () => {
    console.log("\n Your Todo-List:\n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
    console.log("\n");
};
//Function to delete a task from the list
let deleteTask = async () => {
    viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete :",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n "${deletedTask}" this task has been deleted successfully from your Todo-List\n `);
};
//Function to update a task
let updateTask = async () => {
    viewTask();
    let updateTaskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to update :"
        },
        {
            name: "newTask",
            type: "input",
            message: "Enter the updated task :"
        }
    ]);
    todoList[updateTaskIndex.index - 1] = updateTaskIndex.newTask;
    console.log(`\n Task at index no. ${updateTaskIndex.index} updated successfully.\n`);
};
main();
