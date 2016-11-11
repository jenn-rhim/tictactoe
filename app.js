$(document).ready(function(){

  var tic = "X";
  $(".tic-cell").on("click", function() {
    if ($(this).html() != "")
      return;
    $(this).html(tic);
    if (tic == "X") {
      tic = "O";
    } else if (tic == "O") {
      tic = "X";
    }
  });

});
