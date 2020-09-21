// image parse
let index = 0, indexPrice = 0, images = document.getElementsByTagName('img'), price = "", heading = ""
for (let i = 0; i < images.length; i++) {
    if ((images[i].height > images[index].height) && (images[i].width > images[index].width)) {
        index = i
    }
}
image = images[index]

//Heading
var textAttr = [...document.querySelectorAll('h1 , h2, h3 ,h4 , h5 , h6 , span')], parentDiv2 = null
textAttr = textAttr.filter(_ => _.innerText.includes('rating') || _.innerText.includes('Rating'))
if (textAttr.length && textAttr[1]) {
    parentDiv2 = textAttr[1].parentNode.parentNode.parentElement.parentElement.parentElement
    heading = parentDiv2.querySelector('h1').innerText
}

//Price
if (parentDiv2 !== null) {
    let indexPrice = 0, priceParent = parentDiv2.querySelectorAll('div')
    for (let j = 0; j < priceParent.length; j++) {
        var size = window.getComputedStyle(priceParent[j], null).getPropertyValue('font-size');
        var iSize = window.getComputedStyle(priceParent[indexPrice], null).getPropertyValue('font-size');
        if (size > iSize) {
            indexPrice = j
        }
    }
    price = priceParent[indexPrice].innerText
}