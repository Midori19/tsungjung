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

        if (winScroll > $('.info').offset().top - ($('.info').offset().top/2)) {
            $('.infoContent').addClass('rb')
        }

        // debug
        $('.bg .windowshow').text($(window).width())
        // debug end
    })

    // 在 works 下面增加 work 類別
    function addWorks() {
        for (let i = 0; i <= 15; i++) {
            let workHtml = '<a href="#lightbox_' + i + '" class="work"><div class="workInner workInner_' + i + '" style="background-image: url(images/' + i + '.jpg);"></div></a>'
            let lightboxHtml = '<div class="lightbox" id="lightbox_' + i +'"><img src="images/' + i + '.jpg"><a class="lightboxClose" href="#workInner' + i +'"></a></div>'
            // if (i >= 12) {
            //     workHtml = '<a href="#lightbox_' + i + '" class="work noneMB"><div class="workInner workInner_' + i + '" style="background-image: url(images/' + i + '.jpg);"></div></a>'
            // }
            $('.works').append(workHtml)
            $('body').append(lightboxHtml)
        }
    }
    addWorks()
    
    // menu
    $('.menuButton').click(function() {
        $('.menu').toggleClass('trans')
        $('.menuButton').toggleClass('opac')
    })
    $('.menu').click(function() {
        $('.menu').toggleClass('trans')
        $('.menuButton').toggleClass('opac')
    })
})