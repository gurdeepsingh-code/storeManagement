$(document).ready(function(){

    // Start Toggle button for logout
    $("#showLogoutDropDown").click(function(){
        $("#loginPersonDropDownMenu").toggle('slow');
    });
    // End Toggle button for logout
    
    //Start Show date to topbar
    var todayDate = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    document.getElementById('todayDate').innerHTML = todayDate;
    //End Show date to topbar

    // Start show current time to topbar
    displayCurrentTime();
    var currentTime = setInterval( function() {
        displayCurrentTime();
    }, 1000);
    // End show current time to topbar

    // Start toggle button for navbar
    $("#navbarToggleButton").click(function(){
        $(".left-side-menu").toggle();
    });
    // End toggle button for navbar
})

// Start Function to give preceding 0 to single digit value
var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};
// End Function to give preceding 0 to single digit value

var displayCurrentTime = function() {
    var date = new Date;
    var hour = padSingleDigit(date.getHours());
    var min = padSingleDigit(date.getMinutes());
    var second = padSingleDigit(date.getSeconds());
    var ampm;
    
    // Am|Pm check
    ampm = hour >= 12 ? 'PM' : 'AM';
    // AM | PM check end
    
    hour = hour % 12;
    
    if(hour == 0){
        hour = 12;
    }

    hour = padSingleDigit(hour);
    
    document.getElementById('currentTime').innerHTML = hour+":"+min+":"+second+" "+ampm;
};