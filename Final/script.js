$(document).ready(function(){

    $("#contactbtn").click(function(){
        $("#contact, #contactbtn").toggle();
    })

    $('form').submit(function(event){ event.preventDefault(); });

    $("#donatebtn").click(function(){
        window.alert("Donation Sent, You may leave this page now.");
    })

    $("#contact-btn").click(function(){
        window.alert("Message Sent Successfuly");
    })

    $("#item1").click(function(){
       $("#desc1, #item1").toggle();
    })

    $("#desc1").click(function(){
        $("#desc1, #item1").toggle();
    })

    $("#item2").click(function(){
        $("#desc2, #item2").toggle();
    })
 
    $("#desc2").click(function(){
        $("#desc2, #item2").toggle();
    })

    $("#item3").click(function(){
        $("#desc3, #item3").toggle();
     })
 
    $("#desc3").click(function(){
        $("#desc3, #item3").toggle();
    })
});