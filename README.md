#Purplebricks - technical test

The compiled version for testing is in the **/dist** folder.

To see the unoptimised code (and demo) before going through the build process:
[http://codepen.io/gdbarnes/full/LVqoBd/](http://codepen.io/gdbarnes/full/LVqoBd/)

Note, this *codepen* version does not include modernizr.

##Build notes

* Scaffolded with Yeoman using Grunt, Bootstrap and Modernizr
* Added in live validation (submit button disabled until criteria are met)

##To do

* optimise for IE8

---

You can remove the live validation by removing this codeblock

```JavaScript
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
```

...and removing **disabled** from this code in index.html

```HTML
<button class="pull-right btn btn-xs pb-button-blue" type="submit" disabled>SUBMIT OFFER</button>
```