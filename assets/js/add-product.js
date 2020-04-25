// Global values to create and remove list
var isValidProductName = 0;
var isValidProductPrice = 0;
var isValidProductCategory = 0;
var isValidProductInStock = 0;
var isValidProductSale = 0;

// Array of categories
var productCategories = ['<option value="Meat & Fish">Meat & Fish</option>', '<option value="Grains & Bread">Grains & Bread</option>', '<option value="Oil & Fat">Oil & Fat</option>', '<option value="Dairy & Eggs">Dairy & Eggs</option>', '<option value="Produce">Produce</option>', '<option value="Tinned & Dried Produce">Tinned & Dried Produce</option>', '<option value="Condiments">Condiments</option>'];

$(document).ready(function () {

    // Append categories to select
    $("#category").append(productCategories);

    // Focus when page start to Product Name
    $("#productName").focus();

    // Submit click event
    $("#submit").click(function () {

        // Variable to check if all values are correct
        var isValid = false;

        // Validating Product Name
        if ($("#productName").val() === '') {
            if (isValidProductName === 0) {
                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Required Product Name");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidProductName++;
            } else {
                // Removing List
                var list = document.getElementById("productNameRequired")
                list.removeChild(list.childNodes[0]);

                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Required Product Name");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidProductName++;
            }
            // Start Appending List to required creatingLI and adding required class
            document.getElementById("productNameRequired").appendChild(creatingLI);
            $("#productNameRequired").addClass('parsley-errors-list filled');
            // End Appending List to required creatingLI and adding required class
            isValid = false;
        } else {
            var productName = $("#productName").val();
            isValid = true;
        }

        // Validating Product Price
        if ($("#price").val() === '') {
            if (isValidProductPrice === 0) {
                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Required Product Price");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidProductPrice++;
            } else {
                // Removing List
                var list = document.getElementById("productPriceRequired")
                list.removeChild(list.childNodes[0]);

                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Required Product Price");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidProductPrice++;
            }
            // Start Appending List to required creatingLI and adding required class
            document.getElementById("productPriceRequired").appendChild(creatingLI);
            $("#productPriceRequired").addClass('parsley-errors-list filled');
            // End Appending List to required creatingLI and adding required class
            isValid = false;
        } else {
            var productPrice = $("#price").val();
            isValid = true;
        }

        // Validating Product Category
        if ($("#category").val() === '') {
            if (isValidProductCategory === 0) {
                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Required Product Category");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidProductCategory++;
            } else {
                // Removing List
                var list = document.getElementById("productCategoryRequired")
                list.removeChild(list.childNodes[0]);

                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Required Product Category");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidProductCategory++;
            }
            // Start Appending List to required creatingLI and adding required class
            document.getElementById("productCategoryRequired").appendChild(creatingLI);
            $("#productCategoryRequired").addClass('parsley-errors-list filled');
            // End Appending List to required creatingLI and adding required class
            isValid = false;
        } else {
            var productCategory = $("#category").val();
            isValid = true;
        }

        // Validating Product Products in stock
        if ($("#inStock").val() === '') {
            if (isValidProductInStock === 0) {

                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Required Products In Stock");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidProductInStock++;
            } else {
                // Removing List
                var list = document.getElementById("productInStockRequired")
                list.removeChild(list.childNodes[0]);

                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Required Products In Stock");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidProductInStock++;
            }
            // Start Appending List to required creatingLI and adding required class
            document.getElementById("productInStockRequired").appendChild(creatingLI);
            $("#productInStockRequired").addClass('parsley-errors-list filled');
            // End Appending List to required creatingLI and adding required class
            isValid = false;
        } else {
            var productInStock = $("#inStock").val();
            isValid = true;
        }

        // Validating Products sale
        if ($("#sale").val() === '') {
            if (isValidProductSale === 0) {

                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Required Items Sold Number");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidProductSale++;
            } else {
                // Removing List
                var list = document.getElementById("productSoldRequired")
                list.removeChild(list.childNodes[0]);

                // Start Creating List and adding data
                var creatingLI = document.createElement("LI");
                var requiredField = document.createTextNode("Required Items Sold Number");
                creatingLI.appendChild(requiredField);
                // End Creating List an adding data
                isValidProductSale++;
            }
            // Start Appending List to required creatingLI and adding required class
            document.getElementById("productSoldRequired").appendChild(creatingLI);
            $("#productSoldRequired").addClass('parsley-errors-list filled');
            // End Appending List to required creatingLI and adding required class
            isValid = false;
        } else {
            var productSold = $("#sale").val();
            isValid = true;
        }

        // Function to create unique id
        function createId() {
            return 'xxxx-yxxx-xyxx'.replace(/[xy]/g, function (e) {
                var rraan = Math.random() * 16 | 0, vvl = e == 'x' ? rraan : (rraan & 0x3 | 0x8);
                return vvl.toString(16);
            });
        }

        // Uploading to firebase if all values is entered
        if (isValid === true) {
            firebase.database().ref('products/' + createId()).set({
                name: productName,
                price: productPrice,
                category: productCategory,
                inStock: productInStock,
                sale: productSold
            });
            $("#successProductAdd").html("Succesfully Added  <b>" + productName + "</b>");
            $("#productName").val('');
            $("#price").val('');
            $("#category").val('');
            $("#inStock").val('');
            $("#sale").val('');
            $("#productName").focus();
        }

    });

    // Keyup event for Product Name
    $("#productName").keyup(function () {
        document.getElementById("productNameRequired").innerHTML = ''
    });

    // Keyup event for Product price
    $("#price").keyup(function () {
        if (isNaN($("#price").val())) {
            alert("Enter valid Price");
            $("#price").val("");
        } else {
            document.getElementById("productPriceRequired").innerHTML = ''
        }
    });

    // Keyup event for Product category
    $("#category").change(function () {
        if ($("#category").val() != '') {
            document.getElementById("productCategoryRequired").innerHTML = ''
        }
    });

    // Keyup event for Product inStock
    $("#inStock").keyup(function () {
        if(isNaN($("#inStock").val())){
            alert("Enter valid In Stock Item");
            $("#inStock").val("");
        } else {
            document.getElementById("productInStockRequired").innerHTML = ''
        }
    });

    // Keyupe event for product on sale
    $("#sale").keyup(function () {
        if(isNaN($("#sale").val())){
            alert("Enter valid Sale Item");
            $("#sale").val("");
        } else {
            document.getElementById("productSoldRequired").innerHTML = ''
        }
    });


});