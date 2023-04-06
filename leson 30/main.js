const PLUS = 1
const NONE = 0
const EC = -1

let a=0, b=0
let diya = NONE

let res = document.querySelector('.res')

function bnt1() {
    if (diya == EC) {
        res.innerText =""
        diya = NONE
    } 
    if (diya == NONE) {
        a *= 10
        a++

    
        res.innerText +=1    
    } else {
        b *= 10
        b++
        res.innerText +=1    
    }
}

function plus() {
    diya = PLUS
    res.innerText +=" + "
}

function eq() {
    if (diya == PLUS) {
        res.innerText = a + b

    }else if (diya == NONE) {
        res.innerText = 'error'
    }

    diya = EC
    a = 0
    b = 0
}