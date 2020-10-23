function shoes() {
    // Input what is the weather
    let x = (document.getElementById("weather").value);
   
    // Processing looking at what the data that is given to say which shoe to say.
    let shoes
    if(x=="hot"){
        shoes= "sandals";
    }
     else if (x == "rain") {
        shoes= "galoshes";
    }
      else if  (x == "snow") {
        shoes= "boots";
    }
      else {
        shoes= "shoes";
    }      
    // Output What shoe to wear. 
    document.getElementById("output").textContent = "You should wear "+ shoes + " today with that kind of weather!";



}