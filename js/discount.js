function dis() {
    //Input how much was spent at the store and what day is it 
    let x = parseFloat(document.getElementById('number1').value);
    let day= new Date().getDay();
    
    // Processing figuring out Tax and discount, then finding if it is Tuesday or Wednesday
    // then doing the price based on what day it is.
    let tax = x * .06;
    let d = x * .10;
    
    let price
    if (x >= 50 && day == 2 ) {
        price = x - d + tax ;
    }
    else if (x >= 50 && day == 3) {
        price = x -d + tax; 
    }
    else {
        price = x+tax;
    }
    // Output telling the customer the price    
    document.getElementById("output").textContent = "Your total is $" + price.toFixed(2);


}