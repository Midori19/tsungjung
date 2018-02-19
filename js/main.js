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

    // 在 works 下面增加 work 類別
    function addWorks() {
        for (let i = 1; i <= 9; i++) {
            let workHtml = '<div class="work"><div class="workInner" style="background-image: url(images/liu_' + i + '.jpg);"></div></div>'
            if (i >= 7) {
                workHtml = '<div class="work noneMB"><div class="workInner" style="background-image: url(images/liu_' + i + '.jpg);"></div></div>'
            }
            $('.works').append(workHtml)
        }
    }
    addWorks()
})