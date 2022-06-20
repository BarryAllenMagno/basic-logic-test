$(document).ready(function(){
    $("#slideUp").on("click", function(){
      $("#p1").slideUp(500);
    });
    
    $("#slideDown").on("click", function(){
      $("#p1").slideDown(500);
    });
    
    $("#fadeOut").on("click", function(){
        $("#p1").fadeOut(500);
    });
    
    $("#fadeIn").on("click", function(){
        $("#p1").fadeIn(500);
    });

    $('#restart').on("click", function() {
        location.reload();
    });
    

    
    $("#change").on("click", function(){
        var inputValue = $("#inputText").val();
        if (inputValue == "")
        {
            alert("Please write something in the text area!");
        }
        else if(inputValue == "Something" || inputValue == "SOMETHING" || inputValue == "something")
        {
            $("#p1").text("Congratulations! You got the logic! Image unlocked!");
            $("#hide-image").fadeIn(1000);
            $("#div1").removeClass("alert alert-primary");
            $("#div1").addClass("alert alert-success");
        }
        else
        {
            $("#p1").text(inputValue);
            $("#inputText").val('');
            console.log(inputValue);
        }
    });
  });