let count = 0

function countClick() {
    count++;
}

function start() {
    count = 0
    setTimeout(stop, 2000)
}

function stop() {
    console.log(count)
    top2()
    let modal = document.querySelector('.modal')
    modal.style.visibility = 'visible'
    let doska = document.querySelector('.modal')
    let newElement = document.createElement('div')
        newElement.innerHTML = 'кліків ' + count
    console.log(count)
    mas[mas.length] = count
     console.log(mas)
}
function closeModal() {
    let modal = document.querySelector('.modal')
    modal.style.visibility = 'hidden'
}
function top2() {
    let board = document.querySelector('.board')
    let newElement = document.createElement('div')
        // newElement.innerHTML = add element ${count}
        newElement.innerHTML = 'кліків ' + count
    board.append(newElement)
    let doska = document.querySelector('.doska')
    let newElement2 = document.createElement('div')
        newElement2.innerHTML = 'кліків ' + count
        doska.append(newElement2)
}
let mas = []

//function stop() {

//}

function save() {
    localStorage.setItem('mas',mas)
}

function load(){
    let loadMas = localStorage.getItem('mas')
    alert(loadMas)
    let doska = document.querySelector('.doska')
    let newElement2 = document.createElement('div')
        newElement2.innerHTML = loadMas
        doska.append(newElement2)
}
