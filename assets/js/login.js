// Email pattern
var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

// Variable to check validation of email and password
var isValidEmail = false;
var isValidPassword = false;

$(document).ready(function () {

    // Hide of Email required and password required when  page load
    $("#EmailRequired").hide();
    $("#passwordRequired").hide();

    // Email input keyup event
    $("#emailaddress").keyup(function () {
        if ($("#emailaddress").val() === '') {
            isValidEmail = false;
            $("#EmailRequired").html("<li>Email field cannot be empty</li>");
            $("#EmailRequired").show();
        } else if (!emailPattern.test($("#emailaddress").val())) {
            isValidEmail = false
            $("#EmailRequired").html("<li>Enter a valid Email id</li>");
            $("#EmailRequired").show();
        } else {
            isValidEmail = true;
            $("#EmailRequired").hide();
        }
    });

    // Password input keyup event
    $("#password").keyup(function(){
        if ($("#password").val() === ''){
            isValidPassword = false;
            $("#passwordRequired").html("<li>Password field cannot be empty</li>");
            $("#passwordRequired").show();
        } else {
            isValidPassword = true;
            $("#passwordRequired").hide();
        }
    })

    // Event when login button pressed
    $("#loginSubmit").click(function (e) {

        // Vaidating Email
        if (!isValidEmail) {

            if(($("#emailaddress").val() === '') || ($("#password").val() === '') || (!emailPattern.test($("#emailaddress").val()))){
                if ($("#emailaddress").val() === '') {
                    isValidEmail = false;
                    $("#EmailRequired").html("<li>Email field cannot be empty</li>");
                    $("#EmailRequired").show();
                } else if (!emailPattern.test($("#emailaddress").val())) {
                    isValidEmail = false
                    $("#EmailRequired").html("<li>Enter a valid Email id</li>");
                    $("#EmailRequired").show();
                } else {
                    isValidEmail = true;
                    $("#EmailRequired").hide();
                } 
                
            }
            
            e.preventDefault();
        }

        // Validating Password
        if(!isValidPassword){
            if ($("#password").val() === ''){
                isValidPassword = false;
                $("#passwordRequired").html("<li>Password field cannot be empty</li>");
                $("#passwordRequired").show();
            } else {
                isValidPassword = true;
                $("#passwordRequired").hide();
            }
            e.preventDefault();
        }

        // If email and password are valid in input
        if( isValidEmail && isValidPassword){
            e.preventDefault();

            // Fetching data from database
            var database = firebase.database();
            database.ref('logins').once('value', function(snapshot) {
                if (snapshot.exists()) {

                    // Checking for each value
                    snapshot.forEach(function(data) {
                        var val = data.val();

                        // Check if email exist
                        if(val.email === $("#emailaddress").val()){
                            
                            // Check if password exist
                            if(val.password === $("#password").val()){
                                $("#loginStatus").html("");
                                sessionStorage.setItem("loginPersonEmail", val.email);
                                window.location.href = 'all-products.html';
                            } else {
                                $("#loginStatus").html("");
                                $("#loginStatus").html("<li>Email | Password not matched</li>")
                            }
                            // End checking
                        } else {
                            $("#loginStatus").html("");
                            $("#loginStatus").html("<li>Email | Password not matched</li>")
                        }
                        // End checking

                    });
                    // End checking
                }
            });

        }

    })
});