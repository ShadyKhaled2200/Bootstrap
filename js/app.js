//  <reference path="../typings/globals/jquery/index.d.ts" />
$(document).ready(function(){

    $('#loading').fadeOut(2000, ()=>{
        $('body').css({overflow: 'auto'})
    })


 $(window).scroll(function () {
    
 

 
 let x = $(window).scrollTop();
 let aboutOff = $('#about').offset().top;
 let homeHeight = $('#about').innerHeight();
 console.log(x)


// if(x < 550){


//     $('.navbar').css({backgroundColor: 'tomato'})
// } else{

//     $('.navbar').css({backgroundColor: 'transparent'})


// }


 if(x > homeHeight){

    $('.navbar').css({backgroundColor: 'tomato'})
    $('.btn-up').fadeIn(1000);
 }else{

         $('.navbar').css({backgroundColor: 'transparent'})
         $('.btn-up').fadeOut(1000);

 }

});


$('.btn-up').click(function(){

    // $(window).scrollTop(0);
    $('body','html').animate({scrollTop: 0}, 500);


})


// $('.nav-link').click(function(){

//     $('body','html').animate({scrollTop: '2000px'}, 200);
// })

$('.nav-link').click(function(e){

  let Id = $(e.target).attr('href');
  let offsetTop = $(Id).offset().top;
  $('body','html').animate({scrollTop: offsetTop}, 500);


$(this).after('<div class="draw-boarder"></div>');
$('.nav-link').not(this).next().remove();;

  console.log(Id);
})


})
