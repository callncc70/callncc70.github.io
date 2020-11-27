function doFV(){
    ///Input Gather numbers from the user to help with calculations
    let princ=  parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let year=  parseFloat(document.getElementById('years').value);
    let time = parseFloat(document.getElementById('times').value);
    let message;
    // Processing do the arthmatic for the desired outcome
        let factor=computeFutureValue(princ,rate,year,time);
        message= "$"+factor.toFixed(2)
    //Output for the doFV function 
    document.getElementById('output').innerHTML= message;
    
}
    // function for finding computeFutureValue 
function computeFutureValue(principal,annualRate,years,periodsPerYear){
     return principal*(1+(annualRate/periodsPerYear))**(years*periodsPerYear); 
     
      }