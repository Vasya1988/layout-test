const elements = {
    info: 'info_inner',
    weightAmount: 'weight_amount',
    weightMeasure: 'weight_measure'
}

const weightOfPocket = [0.5, 2, 5]
const measure = 'кг'

document.querySelectorAll(`.${elements.info}`)
    .forEach((item, index) => {
        item.style.backgroundImage = "url('images/Photo.png')"
        item.querySelector(`.${elements.weightAmount}`).innerText = weightOfPocket[index]
        item.querySelector(`.${elements.weightMeasure}`).innerText = measure
        // item.style.backgroundRepeat = "no-repeat"
    })