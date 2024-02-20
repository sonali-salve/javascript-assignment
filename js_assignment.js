// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero. 

function checkNum(num){
    if(num>0){
        console.log(`Number ${num} is positive`);
    }
    else if(num<0){
        console.log(`Number ${num} is negative`);
    }
    else{
        console.log(`Number ${num} is Zero`);
    }
}
checkNum(0); //function calling


// Assignment 2:
// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. 
// The factorial of a number N is the product of all positive integers less than or equal to N. 
function factorial(num){
    let result=1;
    for(let i=1;i<=num;i++){
        result=result*i;
    }
    console.log(`factorial of giiven number is ${result}`);
}
let n=prompt("Enter a number : ");//prompt takes input as string even if we are giving number 
n=parseInt(n);                     //that's the reason I takes parseInt to change input type
factorial(n); //function calling


// Assignment 3:
// Write a JavaScript function that takes two numbers as parameters and returns the larger one. 
function largerNum(num1,num2){
    return num1 > num2 ? num1 : num2 ; //tenory operator
}
let result=largerNum(44,11);  //function calling and final result store in variable
console.log(`largest number is ${result}`);


//  Assignment 4:
//  Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. 
// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward 
// (ignoring spaces, punctuation, and capitalization). 
function palindromeStr(str){
    let reverse='';

    for(let i=(str.length)-1;i>=0;i--){
        reverse+=str[i];
    }
    if(reverse==str){
        console.log(`String ${str} is palindrome`);
    }
    else {
        console.log(`String ${str} is not palindrome`);
    }
}
let str=prompt("Enter a string : ");
palindromeStr(str);


// Assignment 5:
// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. 
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. 
function primeNum(num){
    let count;
    for(let i=2;i<=num;i++){
        count=0;
        for(j=2;j<i;j++){
            if(i%j==0){
                count=1;
                break;
            }
        }
        if(count==0){
            console.log(`Number ${i} is a prime number`);
        }
    }
    
}
primeNum(20); //function calling

// Assignment 6:
// Write a JavaScript function that simulates a simple calculator. 
// The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation. 
function calculator(num1,num2,operator){
    let result;
    switch(operator){
        case '+':
            result=num1+num2;
            console.log(`sum of number is ${result}`);
            break;
        case '-':
            result=num1-num2;
            console.log(`subtraction of number is ${result}`);
            break;
        case '*':
            result=num1*num2;
            console.log(`multiplication of number is ${result}`);
            break;
        case '/':
            result=num1/num2;
            console.log(`division of number is ${result}`);
            break;
        default :
            console.log("invailid input");
            break;
    }
}
calculator(85,45,'+');  //function calling

// Assignment 7:
// Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string. 
function checkVowels(str){
    let count=0;
    for(let i=0;i<str.length;i++){
    switch(str[i]){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            count++;
            break;
        }
    }
    return count;

}
console.log(`Number of vowels is ${checkVowels("javascript tutorial")}`);


// Assignment 8:
// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number.
//  A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself. 

function perfectNum(num){
    let sum=0;
    for(let i=1;i<=num/2;i++){
        if(num%i==0){
            sum+=i;
        }
    }
    if(sum==num){
        console.log(`Number ${num} is perfect number`);
    }
    else {
        console.log(`Number ${num} is not perfect number`);
    }
}
perfectNum(6); //function calling


// Assignment 9:
// Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. 
// The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones. 
function fibonacciSer(value){
    let a,b;
    a=0;
    b=1;
    console.log("Fibonacci series : ->")
    for(let i=1;i<=value;i++){
        console.log(a);
        let temp = a+b;
        a=b;
        b=temp;
    }
}
fibonacciSer(15);  //function caliing



// Assignment 10:
// Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10. 
function table(num){
    for(let i=1;i<=10;i++){
       console.log(num+"*"+i+"="+num*i);
    }
}
table(4); //function calling






