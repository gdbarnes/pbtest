// Hide and show a section with jQuery

$( ".hide-show" ).click(function() {
  $(this).children(".showhide-text").text(function(i, text){
    return text === "SHOW" ? "HIDE" : "SHOW";
  });
  $( this ).children(".glyphicon").toggleClass("glyphicon-menu-up glyphicon-menu-down");
  $( this ).closest( "section" ).find( ".hideable" ).toggle();
});

// Some very basic live validation

$("input[data-type='number']").keyup(function(event){

  // skip for arrow keys
  if(event.which >= 37 && event.which <= 40){
      event.preventDefault();
  }
  var $this = $(this);
  var error = false;
  var statusHTML = "";
  var num = $this.val().replace(/,/gi, "");
  var num2 = num.split(/(?=(?:\d{3})+$)/).join(",");
  $this.val(num2);
  
  if (!num) {
    error = true;
    statusHTML = "Please enter an offer";
  }
  
  if ( isNaN(num) === true ) {
    error = true;
    statusHTML = "Numbers only please";
  } else if ( num % 1 !== 0 ) {
    error = true;
    statusHTML = "Amount must be in pounds";
  }
  
    if (error) {
    $('.pb-button-blue').prop('disabled', true);
    $(".error").html( statusHTML );
  } else {
    $('.pb-button-blue').prop('disabled', false);
    $(".error").html( '<span class="glyphicon glyphicon-ok"></span>' );
  }

});

function validateForm() {
    var error2 = "";
    var x = document.forms["offer"]["amount"].value;
    x = x.replace(/,/gi, "");

    // Is the field empty
    if (x === null || x === "") {
      error2 = "Please enter an offer";
    }
    // Is it a number
    if ( isNaN(x) === true ) {
      error2 = "Numbers only please";
    }
  
    // Integer?
    if ( x > Math.floor(x) ) {
      error2 = "Amount must be in pounds";
    }
  
    if (error2) {
      $(".error").html( error2 );
      return false;
    } else {
      console.log(x);
      return false;
    }

}
