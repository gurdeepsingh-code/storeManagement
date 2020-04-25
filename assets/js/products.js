// search button
function searchItemName() {

  // Start Getting value of Searched Item
  var searchedItem = document.getElementById('searchItemName').value;
  // End Getting value of Searched Item

  // Start Initially Set table data to empty
  $("#store-categories-table-tbody").html("");
  // End Initially Set table data to empty

  // Start Getting data from firebase
  var database = firebase.database();
  database.ref('products').once('value', function (snapshot) {
    if (snapshot.exists()) {
      // Start Checking each value from database
      snapshot.forEach(function (data) {
        var dataValue = data.val();
        // Search Operation
        if (dataValue.name.includes(searchedItem) === true) {
          $('#store-categories-table-tbody').append(
            "<tr>" +
            "<th>" + dataValue.name + "</th>" +
            "<td>$ " + dataValue.price + "</td>" +
            "<td>" + dataValue.category + "</td>" +
            "<td>" + dataValue.inStock + "</td>" +
            "<td>" + dataValue.sale + "</td>" +
            "</tr>"
          );
        }
        // Search Operation end
      });
      // End Checking each value from database
    }
  });
  // End getting data from firebase
}

$(document).ready(function () {

  // Start Show data from firebase database
  var database = firebase.database();
  database.ref('products').once('value', function (snapshot) {
    if (snapshot.exists()) {
      // Start Checking each value from database
      snapshot.forEach(function (data) {
        var dataValue = data.val();
        $('#store-categories-table-tbody').append(
          "<tr>" +
          "<th>" + dataValue.name + "</th>" +
          "<td>$ " + dataValue.price + "</td>" +
          "<td>" + dataValue.category + "</td>" +
          "<td>" + dataValue.inStock + "</td>" +
          "<td>" + dataValue.sale + "</td>" +
          "</tr>"
        );
      });
      // End Checking each value from database
    }
  });
  // End Show data from firebase database

});