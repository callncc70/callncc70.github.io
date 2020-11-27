function doPayment(){
    let princ = parseFloat(document.getElementById('borrow').value);
    let rate= parseFloat(document.getElementById('rate').value);
    let year= parseFloat(document.getElementById('year').value);
    let time= parseFloat(document.getElementById('time').value);
        
        let payment= computePayment(princ,rate,year,time)
    
    document.getElementById('output1').innerHTML= "$"+payment.toFixed(2);

}
function doBalance(){
    let princ = parseFloat(document.getElementById('borrow').value);
    let rate= parseFloat(document.getElementById('rate').value);
    let year= parseFloat(document.getElementById('year').value);
    let time= parseFloat(document.getElementById('time').value);
    let pay= parseFloat(document.getElementById('pay').value);
    
        let balance=computeBalance(princ,rate,year,time,pay)    
    
    
    document.getElementById('output2').innerHTML="$"+balance.toFixed(2);


}
function computePayment (principal, annualRate, years, periodsPerYear){
    return principal*(annualRate/periodsPerYear)/(1-(1+(annualRate/periodsPerYear))**(-years*periodsPerYear));
    
}
function computeBalance (principal, annualRate, years, periodsPerYear, numberOfPaymentPaidToDate){
    
    return (principal*((1+(annualRate/periodsPerYear))**numberOfPaymentPaidToDate))-(computePayment(principal,annualRate,years,periodsPerYear)*((1+(annualRate/periodsPerYear))**(numberOfPaymentPaidToDate)-1))/((annualRate/periodsPerYear));
    

}