$(function() {
    let winW = $(window).width()
    if (winW < 765) {
        $('.portfolio .work').removeClass('noneMB')
    }

    $(window).scroll(function() {
        let winH = $(window).height()
        let winScroll = $(window).scrollTop()
        
        const sliderCont = 50 + (50 * (winScroll / $('.bg').height()))
        $('.bg > span').css('transform','translateX(-' + sliderCont + '%)')

        if (winScroll > $('.info').offset().top - 300) {
            $('.infoContent').addClass('rb')
        }
    })

    function addWorks() {
        for (let i = 0; i < 9; i++) {
            let workHtml = '<div class="work"><div class="workInner_' + i + '"></div></div>'
            $('.works').append(workHtml)
        }
    }
})