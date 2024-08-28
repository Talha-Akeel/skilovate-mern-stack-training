const content = document.getElementById('content');
content.style.backgroundColor = 'blue';
content.style.padding = '20px 20px';
content.style.color = 'white';

const h2 = document.createElement('h2');
const p = document.createElement('p');

h2.innerText = "Pakistan";
p.innerHTML = "This is Pakistan";

const first_div = document.createElement('div');
const first_div_h2 = document.createElement('h2');
const first_div_p = document.createElement('p');
first_div_h2.innerText = "Pakistan";
first_div_p.innerHTML = "This is Pakistan";
first_div.appendChild(first_div_h2);
first_div.appendChild(first_div_p);
first_div.style.backgroundColor = 'green';
first_div.style.padding = '5px 10px';
first_div.style.margin = '5px 10px';
first_div.style.color = 'white';
content.appendChild(first_div);

const second_div = document.createElement('div');
const second_div_h2 = document.createElement('h2');
const second_div_p = document.createElement('p');
second_div_h2.innerText = "Pakistan";
second_div_p.innerHTML = "This is Pakistan";
second_div.appendChild(second_div_h2);
second_div.appendChild(second_div_p);
second_div.style.backgroundColor = 'pink';
second_div.style.padding = '5px 10px';
second_div.style.margin = '5px 10px';
second_div.style.color = 'white';
content.appendChild(second_div);

const third_div = document.createElement('div');
const third_div_h2 = document.createElement('h2');
const third_div_p = document.createElement('p');
third_div_h2.innerText = "Pakistan";
third_div_p.innerHTML = "This is Pakistan";
third_div.appendChild(third_div_h2);
third_div.appendChild(third_div_p);
third_div.style.backgroundColor = 'orange';
third_div.style.padding = '5px 10px';
third_div.style.margin = '5px 10px';
third_div.style.color = 'white';
content.appendChild(third_div);




