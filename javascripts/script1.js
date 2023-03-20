0;/*$(document).ready(function(){$('.product').show(5000);});


$('.slider_conytainer').click(function(){$('.product').toggle();});

$('.product h4').hover(function(){
    $(this).css("color","red");
});
*/
/*let menu_item = document.getElementById("hamburger_menu");


menu_item.addEventListener("click", function() {
    let media_menu_wrapper = document.getElementById("dropdown_menu");
    media_menu_wrapper.classList.toggle("display");
});*/

$('#hamburger_menu').click(function(){
    $('#dropdown_menu').slideToggle(5000);
});

/*$(document).ready(function(){
    $('#dropdown_menu').slideDown(5000);
});*/

    $(document).ready(function(){
        $('.product').slideDown('slow',0.3);
    });
    $(document).ready(function(){
        $('.box').animate({left:'100px',width:'500px',top:'200px'});
    });


    var quizzData= ["Jethro", "Cyril","Ifeanyi"]
    quizzData.forEach(nameEl=>{
        console.log(nameEl);
    })