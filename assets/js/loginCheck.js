$(document).ready(function(){

    // Check if session available
    if(sessionStorage.getItem("loginPersonEmail") === ''){
        window.location.href = 'login.html';
    }
    
    // start show email of person login
    document.getElementById("loginPerson").innerHTML = sessionStorage.getItem("loginPersonEmail");
    // end show email of person login
});