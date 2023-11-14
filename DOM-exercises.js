let x = 0
let y = 0
let z = 0
const myButton = document.querySelector('#my-button')
const clickInfo = document.querySelector ('#click-info')
const colorButton = document.querySelector('#color-button')
const ghostP = document.querySelector('.ghost')
const trafficLightsTop = document.querySelector('.top')
const trafficLightsMiddle = document.querySelector('.middle')
const trafficLightsBottom = document.querySelector('.bottom')
const ghostButton = document.querySelector('#ghost-button')
const visibleButton = document.querySelector ('#visible-button')
const toggleButton = document.querySelector ('#toggle-button')
const lightsButton = document.querySelector ('#lights-button')

myButton.addEventListener('click', () => {
    x++
clickInfo.innerText = `Du har klickat: ${x} gånger.`
})

colorButton.addEventListener('click', () => {
    if (y == 0){
    colorButton.classList.add('color-button')
    y++}
    else{
        colorButton.classList.remove('color-button')
        y = 0
    }
})

ghostButton.addEventListener('click', () => {
	ghostP.classList.add('invisible')
})

visibleButton.addEventListener('click', () => {
	ghostP.classList.remove('invisible')
})

toggleButton.addEventListener('click', () => {
    if (getComputedStyle(ghostP).visibility === 'visible'){
        ghostP.classList.add('invisible')
    }
    else{
        ghostP.classList.remove('invisible')
    }
})

lightsButton.addEventListener('click', () =>{
    if (z == 0){
    trafficLightsTop.classList.toggle('on')
    z++
    }
    else if (z == 1){
        trafficLightsMiddle.classList.toggle('on')
    }
}
)

// toggleButton.addEventListener('click', () => {
//     ghostP.classList.toggle('invisible')
// })

// let element = document.createElement('p')
// element.innerText = 'Du har klickat', x, 'gånger.'
// myDocument.append(element)