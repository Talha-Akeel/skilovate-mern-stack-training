const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const expenses_data = []; // array to store user's expenses data.

// This is the function to add the details about user's expenses.
function add_expenses() {
    // var i = 1;
    // let id = `ABC-${i}`;
    r1.question("Enter the description of our expense ( OR Enter 'exit' to exit ) : ", (expense) => {
        if (expense !== "exit") {
            r1.question("Enter the amount ( OR Enter 'exit' to exit ) : ", (amount) => {

                let date = new Date;
                if (amount !== "exit") {
                    expenses_data.push({ id: `ABC-${expenses_data.length + 1}`, desciption: expense, amount: amount, date: date });

                    // console.log(expenses_data[0].id);
                    // console.log(expenses_data[0].desciption);
                    // console.log(expenses_data[0].amount);
                    // console.log(expenses_data[0].date);
                    // console.log(expenses_data);
                    // console.log(expenses_data.length);

                    add_expenses();
                } else {
                    expense_tracker();
                }

            });
            add_expenses();
        } else {
            expense_tracker();
        }
    });
}

// This is the function to view the details of our expenses.
function view_expenses() {
    if (expenses_data.length === 0) {
        console.log("No data found");
    } else {
        for (let i = 0; i < expenses_data.length; i++) {
            console.log(`${i + 1}- expense(${expenses_data[i].desciption}) of amount(${expenses_data[i].amount}) on date(${expenses_data[i].date}) with id(${expenses_data[i].id})`);
        }
    }

    r1.question("Do you want to exit? (yes/no) : ", (will) => {
        if (will === "yes") {
            expense_tracker();
        }
        if (will === "no") {
            view_expenses();
        }
    });
}

// This is the function to update user's expenses.
function update_expenses() {

    r1.question("Enter the ID to update the data ( OR Enter 'exit' to exit ) : ", (data_id) => {
        if (data_id !== "exit") {
            for (let i = 0; i < expenses_data.length; i++) {
                if (data_id === expenses_data[i].id) {
                    r1.question("Enter the new Desciption : ", (new_description) => {
                        expenses_data[i].desciption = new_description;
                        r1.question("Enter the new amount : ", (new_amount) => {
                            expenses_data[i].amount = new_amount;
                            update_expenses();
                        });
                    });
                }
            }
        } else {
            expense_tracker();
        }
    });
}

// This is the function to delete user's expenses.
function delete_expenses() {
    r1.question("Enter the ID to delete the data ( OR Enter 'exit' to exit ) : ", (data_id) => {
        if (data_id !== "exit") {
            for (let i = 0; i < expenses_data.length; i++) {
                if (data_id === expenses_data[i].id) {
                    console.log(`Data with ID:${expenses_data[i].id} has been deleted.`);
                    expenses_data.splice(i,1);
                    delete_expenses();
                }
            }
        } else {
            expense_tracker();
        }
    });
}

// This is the main function which calls all other functions.
function expense_tracker() {

    console.log("Welcome to the Expense Tracker Application, here you can manage your Finances!");
    console.log("");
    console.log("1. Add Expenses");
    console.log("2. View Expenses");
    console.log("3. Update Expenses");
    console.log("4. Delete Expenses");
    console.log("5. Exit");

    r1.question("Please choose an option (1-5): ", (option) => {
        switch (option) {
            case '1':
                add_expenses();
                break;
            case '2':
                view_expenses();
                break;
            case '3':
                update_expenses();
                break;
            case '4':
                delete_expenses();
                break;
            case '5':
                console.log('Exiting...');
                r1.close();
                break;
            default:
                console.log('Invalid option. Please try again.');
        }
    });
}

expense_tracker();
