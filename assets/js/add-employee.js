// Global values to create and remove List
var isValidEmployeeName = 0;
var isValidEmployeeEmail = 0;
var isValidEmployeePassword = 0;
var isEmailAvailable = false;

// Email Pattern
var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

$(document).ready(function () {

    // Focus Employee Name
    $("#employeeName").focus();

    // Click event for creating Employee
    $("#createEmployee").click(function () {

        // Creating A variable to check if everything is valid
        var isValid = false;

        // Validating Employee Name
        if ($("#employeeName").val() === '') {
            if (isValidEmployeeName === 0) {
                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Required Employee Name");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidEmployeeName++;
            } else {
                // Removing List
                var list = document.getElementById("employeeNameRequired")
                list.removeChild(list.childNodes[0]);

                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Required Employee Name");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidEmployeeName++;
            }
            // Start Appending List to required ul and adding required class
            document.getElementById("employeeNameRequired").appendChild(creatingLI);
            $("#employeeNameRequired").addClass('parsley-errors-list filled');
            // End Appending List to required ul and adding required class
            isValid = false;
        } else {
            var employeeName = $("#employeeName").val();
            document.getElementById("employeeNameRequired").innerHTML = ''
            isValid = true;
        }

        // Validating Employee Email
        if ($("#employeeEmail").val() === '') {
            if (isValidEmployeeEmail === 0) {
                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Required Employee Email");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidEmployeeEmail++;
            } else {
                // Removing List
                var list = document.getElementById("employeeEmailRequired")
                list.removeChild(list.childNodes[0]);

                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Required Employee Email");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidEmployeeEmail++;
            }
            document.getElementById("employeeEmailRequired").appendChild(creatingLI);
            $("#employeeEmailRequired").addClass('parsley-errors-list filled');
            isValid = false;
        } else if (!emailPattern.test($("#employeeEmail").val())) {
            if (isValidEmployeeEmail === 0) {
                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Enter Valid Email id");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidEmployeeEmail++;
            } else {
                // Removing List
                var list = document.getElementById("employeeEmailRequired")
                list.removeChild(list.childNodes[0]);

                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Enter Valid Email id");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidEmployeeEmail++;
            }
            document.getElementById("employeeEmailRequired").appendChild(creatingLI);
            $("#employeeEmailRequired").addClass('parsley-errors-list filled');
            isValid = false;
        } else {
            var employeeEmail = $("#employeeEmail").val();
            document.getElementById("employeeEmailRequired").innerHTML = ''
        }

        // Validating Employee Password
        if ($("#employeePassword").val() === '') {
            if (isValidEmployeePassword === 0) {
                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Required Employee Password");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidEmployeePassword++;
            } else {
                // Removing List
                var list = document.getElementById("employeePasswordRequired")
                list.removeChild(list.childNodes[0]);

                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Required Employee Password");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidEmployeePassword++;
            }
            document.getElementById("employeePasswordRequired").appendChild(creatingLI);
            $("#employeePasswordRequired").addClass('parsley-errors-list filled');
            isValid = false;
        } else {
            var employeePassword = $("#employeePassword").val();
            document.getElementById("employeePasswordRequired").innerHTML = ''
            isValid = true;
        }


        // Function to create unique id
        function createId() {
            return 'xxxx-yxxx-xyxx'.replace(/[xy]/g, function (e) {
                var rraan = Math.random() * 16 | 0, vvl = e == 'x' ? rraan : (rraan & 0x3 | 0x8);
                return vvl.toString(16);
            });
        }

        // Uploading data to firebase if all fields is valid
        if (isValid === true) {
            firebase.database().ref('employee/' + createId()).set({
                name: employeeName,
                email: employeeEmail,
                password: employeePassword
            });
            $("#employeeAdded").html("Employee Added Successfully with name <b>" + employeeName + "</b>");
            $("#employeeName").val("");
            $("#employeeEmail").val("");
            $("#employeePassword").val("");
        }
        // end Uploading data to firebase if all fields is valid

    });

    // Employee Name keyup event
    $("#employeeName").keyup(function () {
        document.getElementById("employeeNameRequired").innerHTML = ''
    });

    // Employee Email key up event
    $("#employeeEmail").keyup(function () {
        if (!emailPattern.test($("#employeeEmail").val())) {
            if (isValidEmployeeEmail === 0) {
                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Enter Valid Email id");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidEmployeeEmail++;
            } else {
                // Removing List
                var list = document.getElementById("employeeEmailRequired")
                list.removeChild(list.childNodes[0]);

                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Enter Valid Email id");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidEmployeeEmail++;
            }
            document.getElementById("employeeEmailRequired").appendChild(creatingLI);
            $("#employeeEmailRequired").addClass('parsley-errors-list filled');
            isValid = false;
        } else {
            // Start Getting data from firebase
            var database = firebase.database();
            database.ref('employee').once('value', function (snapshot) {
                if (snapshot.exists()) {
                    // Start Checking each value from database
                    snapshot.forEach(function (data) {
                        var dataValue = data.val();
                        // Search Operation
                        if (dataValue.email === $("#employeeEmail").val()) {
                            alert("Email already Available");
                            $("#employeeEmail").val("");
                            isEmailAvailable = true;
                        }
                        // Search Operation end
                    });
                    // End Checking each value from database
                }
            });
            // End getting data from firebase

            if(isEmailAvailable === false){
                var employeeEmail = $("#employeeEmail").val();
                document.getElementById("employeeEmailRequired").innerHTML = ''
                isValid = true;
            }
        }
    });

    // Employee Password keyup event
    $("#employeePassword").keyup(function () {
        document.getElementById("employeePasswordRequired").innerHTML = ''
    });


});