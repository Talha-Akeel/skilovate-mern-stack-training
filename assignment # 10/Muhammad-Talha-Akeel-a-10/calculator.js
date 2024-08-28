let buttons = document.querySelectorAll('.button-item');
let button_input = document.getElementById('button-input');
let equal_button = document.getElementById('equal-button');
let clear_button = document.getElementById('clear-button');

buttons.forEach((button) => {
    button.addEventListener("click",()=>{
        button_input.value += button.value;
    });
});

equal_button.addEventListener("click", () => {
    button_input.value = eval(button_input.value);
});

clear_button.addEventListener('click', () => {
    button_input.value = "";
});



