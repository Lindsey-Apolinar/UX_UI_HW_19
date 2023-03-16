console.log("Your index.js file is loaded correctly!");

$(".inline-block-nav").hover(function(){
    $(this).stop().animate({fontSize: "25px", 
    });
}, function(){
    $(this).stop().animate({fontSize: "15px"});
});

$(".inline-block-nav").hover(function(){
    $(this).css('font-weight', 'bold');
},function(){
    $(this).css('font-weight', 'normal');
});

$("button").hover(function(){
    $(this).css('background-color', '#f0e2d7');
    $(this).css('color', '#944c50');
},function(){
    $(this).css('background-color', '#944c50');
    $(this).css('color', '#f0e2d7');
});