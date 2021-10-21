// $(document).ready(function() {
//   $("#form1").submit(function(event) {
//     if (sessionStorage.checkValidityState()===false) {
//       event.preventDefault();
//       event.stopPropogation();
//     }
//   });
// });

$(document).ready(function() {
  $("#form1").submit(function(event) {
      if (!$("#ssn").val()) {
        $("#ssn").after("<h3>please enter your ssn<h3>");
      }
      event.preventDefault(); 
    
   });
});