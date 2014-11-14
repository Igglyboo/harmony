$(document).bind('keyup', function(e) {
    if(e.keyCode === 39){
        $(".carousel").carousel('next');

    }else if(e.keyCode === 37){
        $(".carousel").carousel('prev');

    }
});