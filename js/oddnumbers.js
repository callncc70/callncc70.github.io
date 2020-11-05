function addNumbers (){
//Input Gather the number from the user to know what to add numbers to also define starting points  
let x = document.getElementById("number1").value;
let i = 1
let sum = 0 
// Processing once the number is capture having a statement to repeat and add all the numbers
// that are odd 
   for (i; i<=x; i+=2 ) {
        sum=sum+i
    }

// Output is the sum of the total numbers it calculates. 
document.getElementById("output").textContent = "The sum of all the odd numbers is "+ sum + " !";





}
