const app = {

    initialize: function() {
    $('#toggle').click(function(){
        $("#dropdown").slideDown(3000);
    });

    $("#circle").hover(function(){
        $(this).animate({left:'300px'});
    });

    $("#secret").click(function(){
        $('#sss').slideDown(2000).slideUp(2000);
    });

    $("#button").dblclick(function() {
        app.animations();
});

    $("#searchbutton").click(function() {
    app.writing();
});



    },

    
    animations: function() {
       var shape = $("#shape"); 
           shape.animate({height:'200px', opacity:'0.7'},0);
           shape.animate({width:'150px', opacity:'0.4'},1500);
           shape.animate({height:'100px', opacity:'0.8'},1500);
           shape.animate({width:'50px', opacity:'1.0'},1500);
    
    },

    writing: function() {
        var woo = $('#appended').val();
        $('ul').append('<li>' + woo + '</li>');
      }


}