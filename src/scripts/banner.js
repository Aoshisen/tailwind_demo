//banner 切换的js
let bannerImgEl = $('.banner img')
let timer = 0;
let total = bannerImgEl.length;
setInterval(() => {
    //当前循环应该渲染的图片
    let current = timer % total;
    bannerImgEl.filter((index) => {
        if (index == current) {
            bannerImgEl.eq(index).css('display', "none")
        } else {
            bannerImgEl.eq(index).css('display', "inline-block")
        }
    })
    timer++;
}, 4000)