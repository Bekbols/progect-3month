
const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /[A-Za-z0-9]@gmail.com/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}


const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')
let posX = 0
let posY = 0

let maxParentWidth = parentBlock.offsetWidth - childBlock.offsetWidth
let maxParentHeight = parentBlock.offsetHeight - childBlock.offsetHeight

const moveBlock = () => {
       if (posX < maxParentWidth) {
           posX++
           childBlock.style.left = `${posX}px`
           childBlock.style.borderRadius = `${posX}px`
           requestAnimationFrame(moveBlock)

       }else if (posX >= maxParentWidth && posY < maxParentHeight) {
           posY++
           childBlock.style.top = `${posY}px`
           requestAnimationFrame(moveBlock)

       }
       if (posY === maxParentHeight) {
           posX++
           childBlock.style.right = `${posX}px`
           requestAnimationFrame(moveBlock)


       }
       // else if (posY >= maxParentHeight && posX >= maxParentWidth) {
       //     posY++
       //     childBlock.style.bottom = `${posY}px`
       //     requestAnimationFrame(moveBlock)
       // }
}
moveBlock()


// let plus = document.querySelector('#start')
// let stop = document.querySelector('#stop')
// let reset = document.querySelector('#reset')
//




