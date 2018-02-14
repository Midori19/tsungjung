$(function() {
    $(window).scroll(function() {
        let winH = $(window).height()
        let winScroll = $(window).scrollTop()
        
        const sliderCont = 50 + (50 * (winScroll / $('.bg').height()))
        $('.bg > span').css('transform','translateX(-' + sliderCont + '%)')

        if (winScroll > $('.info').offset().top - 300) {
            $('.infoContent').addClass('rb')
        }
    })
})