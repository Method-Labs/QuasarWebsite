function isInView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).on("scroll", function(){
    if($(window).scrollTop() >= $('#vel').offset().top/2 - 10){
        let c = new CountUp('alt', 0, 1200, 0, 3);
        if (!c.error)
            c.start();
        else
            console.error(c.error);

        let d = new CountUp('vel', 0, 343, 0, 3);
        if (!d.error)
            d.start();
        else
            console.error(d.error);
        $(window).off("scroll");
    }
});