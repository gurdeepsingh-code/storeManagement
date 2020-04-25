$(document).ready(function () {

  // Start Show data from firebase database
  var database = firebase.database();
  database.ref('employee').once('value', function (snapshot) {
    if (snapshot.exists()) {
      
      // Fetching Each value with for each loop
      snapshot.forEach(function (data) {
        var dataValue = data.val();

        $('#employee-list-tbody').append(
          '<tr>'+
          '<td>' + dataValue.name + '</td>'+
          '<td>' + dataValue.email + '</td>'+
          '<td>' + dataValue.password + '</td>'+
          '</tr>'
        );
      });
      // ENd fetching

    }
  });
  // End Show data from firebase database

});