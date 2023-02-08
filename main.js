const elements = {
    info: 'info_inner'
}

document.querySelectorAll(`.${elements.info}`)
    .forEach((item) => {
        item.style.backgroundImage = "url('images/Photo.png')"
        // item.style.backgroundRepeat = "no-repeat"
    })