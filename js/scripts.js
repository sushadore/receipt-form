$(function() {
  $("#blanks form").submit (function(event) {

    var nameInput=$("input#name").val();
    var streetAddressInput=$("input#streetAddress").val();
    var cityStateInput=$("input#cityState").val();
    var zipInput=$("input#zip").val();
    var emailInput=$("input#email").val();
    var phoneNumberInput=$("input#phoneNumber").val();

    $(".name").text(nameInput);
    $(".streetAddress").text(streetAddressInput);
    $(".cityState").text(cityStateInput);
    $(".zip").text(zipInput);
    $(".email").text(emailInput);
    $(".phoneNumber").text(phoneNumberInput);

    $("#receipt").show();

    event.preventDefault();

  });


});
