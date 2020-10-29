function alarm() {
    //Input the dates of the current day the month the year and day of the week
    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    let dayOfWeek = now.getDay();
    // Processing tell me if I can sleep in the next day so i put the answers for the day before in order to find out 
    // if i can sleep in or not the next day because it does me no good to know the day of if I can sleep in. 
    let answer
    if (dayOfWeek == 5 || dayOfWeek == 6|| now == "Dec 31" || now == "Jul 3" || now == "Dec 24") {
        answer = "Sleep In!";
    }
    else {
        answer = "Get Up!"
    }
    //Output tells me if I need to Get up and set a Alarm for the next day or if I can sleep in. 
    document.getElementById("output").textContent = answer;





}