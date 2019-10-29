var counting = function(countBy, countTo) {

}

$(document).ready(function() {
  $("form#counts").submit(function(event) {
    event.preventDefault();

    var countBy = parseInt($(".countBy").val());
    var countTo = parseInt($(".countTo").val());
    var output = 0;
    for(i = 0; i< countTo; i += countBy) {
      output =  i + countBy;
      $(".outputDisplay").append(output+", ")
    }
  });
});
