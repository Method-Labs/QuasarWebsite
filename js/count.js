$.fn.isOnScreen = function() {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

window.addEventListener('scroll', count);
window.addEventListener('scroll', animateProgressBar);

function count() {
    var element = document.querySelector('#flightPredictions');
    var position = element.getBoundingClientRect();

    //checking for partial visibility
    if (position.top < window.innerHeight && position.bottom >= 0) {
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

        window.removeEventListener('scroll', count);
    }
}

function animateProgressBar() {
    var element = document.querySelector('#ζ-progress');
    var position = element.getBoundingClientRect();

    //checking for partial visibility
    if (position.top < window.innerHeight && position.bottom >= 0) {
        $("#ζ-progressBar").animate({
            width: "45%",
        }, {
            duration: 2000,
            easing: 'swing'
        });

        window.removeEventListener('scroll', animateProgressBar);
    }
}