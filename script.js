function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
   
    
   
    if(principal == undefined || principal <= 0){
        alert("Enter a Positive Number");
        document.getElementById("principal").focus();
        
        return
    }else{
      
        var deposit = "If you deposit <mark>" + principal +",</mark>";
        var rate = "at an interest rate of <mark>"+ rate +" %,</mark>";
        var amount="You will receive an amount of <mark>" +interest + ",</mark>";
        var year ="in the year <mark>"+year +"</mark>";

        document.getElementById("result").innerHTML=deposit+rate+amount+year;

    }
}


function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}