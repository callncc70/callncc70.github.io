function poundsToKilograms() {
    //INPUT from text box 
    let x = parseFloat(document.getElementById("pounds").value);
    let k = 0.45359237;
    //PROCESSING multiply pounds by the kilo number 
    let output = x * k;
    //OUTPUT display answer from processing 
    document.getElementById("output").textContent = x + " Pounds is equal to " + output.toFixed(1) + " Kilograms!";
}