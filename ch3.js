// chapter No.03

// q1
var data = ("i am 15 year's old")

alert(data)

// q2


if(localStorage.getItem('visitCount') === null) {
   
    localStorage.setItem('visitCount', 1);
} else {
    
    var visitCount = parseInt(localStorage.getItem('visitCount'));
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
}

var totalVisits = localStorage.getItem('visitCount');


alert("You have visited this site " + totalVisits + " times.");

// q3

var birthYear = 2006;
document.write("My birth year is " + birthYear+ "<br>" + "The data type of my variable is " + typeof(birthYear) + ".<br>");

// q4

var visitorName = "John Doe";
        var productTitle = "T-shirt";
        var quantity = 5;
        document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");