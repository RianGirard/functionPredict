// #1:
function greeting() {
    return "Hello";
    console.log("World");
} 
var word = greeting();
console.log(word);

//prediction: var word == "Hello" and is printed to screen; correct! 


// #2: 
function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

//prediction: result1 == 8 (prints text to screen); result2 == 11 (prints text to screen); print both results to screen; correct! 

// #3: 
function highFive(num){
    for (var i = 0; i < num; i++){
        if (i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}

//prediction: nothing happens due to function never being called: sad!
