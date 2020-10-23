function math() {
    //INPUT Gather the data that the user has put in to the calculator 
    let x = parseFloat(document.getElementById('number1').value);
    let y = parseFloat(document.getElementById('number2').value);
    let z = document.getElementById("math").value;
    let a = parseFloat(document.getElementById('answer').value);
    //PROCESSING the data is confirmed and makes sure that the processing is correct for 
    // the data that has been acquired.

    switch (z) {
        case "+":
            m = x + y;
            break;
        case "-":
            m = x - y;
            break;
        case "*":
            m = x * y;
            break;
        case "/":
            m = x / y;
            break;

        default:
            m = "something went wrong "
            break;

    }


    let b
    if (a === m) { b = "Correct good job. "; }
    else { b = 'Incorrect, try again.' }


    //OUTPUT show if the information has been input correctl yor not 
    document.getElementById("output").innerHTML = b;

}