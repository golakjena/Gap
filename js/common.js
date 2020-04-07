; (function ($) {

    function menuBar() {
        $('.menuContainer__right').click(function () {
            $(".menuContainer__left").toggleClass('open');
            $(".menuBtn__top").toggleClass('open');
            return false;
        });
    }

    $(function () {
        menuBar();
    });

})(jQuery);




