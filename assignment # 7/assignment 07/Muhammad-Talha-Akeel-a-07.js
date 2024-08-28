// Task # 1

// const get_personal_info = function(person) {
//     return `Name: ${person.name}, Age: ${person.age}`;
// }

// console.log(get_personal_info({ name: 'Muhammad Talha Akeel', age: 99 }));

// convert this function into arrow function.

// Solution:

// const get_personal_info = (person) => `Name: ${person.name}, Age: ${person.age}`;

// console.log(get_personal_info({ name: 'Muhammad Talha Akeel', age: 99 }));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task # 2

// sum of Two numbers

// const sum = function(a,b) {
//     return a+b;
// }

// console.log(sum(2,9));

// solution

// const sum = (a,b) => a+b;

// console.log(sum(2,15));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task # 3

// check even or odd

// const is_even_or_odd = function(num){

//     num%2===0 ? console.log(`${num} is even number`) : console.log(`${num} is odd number`);

// }

// console.log(is_even_or_odd(6));

// solution

// const is_even_or_odd = (num) => num%2===0 ? console.log(`${num} is even number`) : console.log(`${num} is odd number`);

// console.log(is_even_or_odd(11));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 4

// find maximum

// const maximum_no = function(a,b,c){
//     let array = [];
//     array.push(a,b,c);
//     console.log(array);
//     array.sort();
//     console.log(array);
//     console.log(`${array[array.length-1]} is the maximum number.`);
// }

// console.log(maximum_no(11,55,33));

// Solution

// const maximum_no = (a,b,c) => {
//     let array = [];
//     array.push(a,b,c);
//     console.log(array);
//     array.sort();
//     console.log(array);
//     console.log(`${array[array.length-1]} is the maximum number.`);
// }

// console.log(maximum_no(11,55,33));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 5

// Factorial Calculation

// const factorial_of_num = function(num){
//     // let array = [];
//     let a=1;
//     for(let i=num; i>0; i--){
//         a*=i;
//         // array.push(i);
//         // console.log(array);
        
//     }
//     // console.log(array);
//     console.log(a);
    
    
// }

// factorial_of_num(4);

// Solution

// const factorial_of_num = (num) => {
//     let a=1;
//     for(let i=num; i>0; i--){
//         a*=i;   
//     }
//     console.log(a);
// }

// factorial_of_num(5);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 6

// palindrome check

// const palindrome_check = function(string){
//     let array = string.split("");
//     console.log((array));
//     let reverse_array = array.reverse();
//     console.log(reverse_array);
//     let reverse_string = reverse_array.join("");
//     console.log(string);
//     console.log(reverse_string);

//     if(string == reverse_string){
//         console.log(`${string} is a palindrome`);
//     }else{
//         console.log(`${string} is not a palindrome`);
//     }

// }

// palindrome_check("aabbaa");
// palindrome_check("aabbaaa");
// palindrome_check("talha");

// Solution

// const palindrome_check = (string) => {
//     let array = string.split("");
//     console.log((array));
//     let reverse_array = array.reverse();
//     console.log(reverse_array);
//     let reverse_string = reverse_array.join("");
//     console.log(string);
//     console.log(reverse_string);

//     if(string == reverse_string){
//         console.log(`${string} is a palindrome`);
//     }else{
//         console.log(`${string} is not a palindrome`);
//     }
// }

// palindrome_check("aabbaa");
// palindrome_check("aabbaaa");
// palindrome_check("talha");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 7

// Fibonacci Sequence

// const fibonacci_sequence = function(num){
//     var a= 0;
//     var b=1;
//     console.log(b);
//     console.log(a+b);
//     a++;
//     console.log(a+b);
//     for(let )
    
    
//     do{
       
//        console.log(a+b);
//        a++;
//        b++
       
//     }while(b<num)
// }

// 1,1,2,3,5,8,13

// 1
// 0,1 = 1
// 1,1 = 2
// 1,2 = 3
// 2,3 = 5
// 3,5 = 8
// 5,8 = 13
// 8,13 = 21
// 13,21 = 34
// 21,34 = 55

// for(a=0; a<num; a++){
//     for(b=1; b>= a; b++){
//         console.log(a+b);
//     }
// }
// }

// fibonacci_sequence(6);

// const fibonacci_sequence = function(num){
//     // let a=0;
//     // let b=1;
//     for(let i=1; i<=num; i++){
//         console.log(i);
//     //     a++;
//     // b++;
//     }
    
// }

// fibonacci_sequence(6);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 8

// prime number check

// const prime_number_check = function(num){
//     if(num>1){
//     let a=0;
//     for(let i=num; i>0;i--){
//         if(num%i==0){
//             a++;
//         }
//     }
//     console.log(a);

//     if(a>2){
//         console.log(`${num} is not a prime number`);
        
//     }else{
//         console.log(`${num} is a prime number`);
//     }
    
// }else{
//     console.log(`${num} is not a prime number`);
    
// }
// }

// prime_number_check(11);

// solution

// const prime_number_check = (num) => {
//     if(num>1){
//     let a=0;
//     for(let i=num; i>0;i--){
//         if(num%i==0){
//             a++;
//         }
//     }
//     console.log(a);

//     if(a>2){
//         console.log(`${num} is not a prime number`);
        
//     }else{
//         console.log(`${num} is a prime number`);
//     }
    
// }else{
//     console.log(`${num} is not a prime number`);
    
// }
// }

// prime_number_check(11);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 9

// string reversal

// const string_reversal = function(string) {
//     let array = string.split("");
//     // console.log(array);
//     let reverse_array = array.reverse();
//     // console.log(reverse_array);
//     let reverse_string = reverse_array.join("");
//     console.log(reverse_string);
// }

// string_reversal("abc");
// string_reversal("Talha");
// string_reversal("Akeel");
// string_reversal("Ahsan Javed");

// solution

// const string_reversal = (string) => {
//     let array = string.split("");
//     // console.log(array);
//     let reverse_array = array.reverse();
//     // console.log(reverse_array);
//     let reverse_string = reverse_array.join("");
//     console.log(reverse_string);
// }

// string_reversal("Talha");
// string_reversal("Akeel");
// string_reversal("Ahsan Javed");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

