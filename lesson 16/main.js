function addElement() {
    let display = document.querySelector('.display')
    let width = document.querySelector('#width').value
    let height = document.querySelector('#height').value
    let color = document.querySelector('#color').value
    let addElement = document.createElement('div')
    display.append(addElement)
    addElement.style.width = width + 'px'
    addElement.style.height = height + 'px'
    addElement.style.background = color
    addElement.setAttribute('class','ds')

    addElement.style.top = 0+'px'
    addElement.style.left = 0+'px'
}