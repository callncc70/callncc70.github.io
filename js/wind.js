// The function to pull the numbers and decide if what info needs to be given 
function doInputOutput() {
    // Input What is the tempature and the Wind to figure out wind chill
    let x =  parseFloat(document.getElementById('temp').value);
    let y = parseFloat(document.getElementById('wind').value);
    // Processing Do we need to calculate the windchill or not
    if (x<50 && y>3){
        let chill= windChill(x,y);
        // Output if there is a wind chill that needs to be calculated
        document.getElementById('output').innerHTML= "The Tempature outside is "+ chill.toFixed(2) + " degrees Farenheit with the wind.";
    }
    else { 
        // Output if  there is no need to calculate the wind chill 
        document.getElementById('output').innerHTML= "Wind Chill can't be calculated unless it is colder then 50 deggrees and wind above 3 MPH";
    }
    // The Function to figure out windchill 
function windChill (x,y){
    let chill= (35.74 + 0.6215 * x - 35.75 * Math.pow(y, 0.16) + 0.4275 * x * Math.pow(y, 0.16));
    return chill
 
    }
    
}
