'use strict'

// max x:1480
// max y:780

const snake = document.querySelector('.snake');
// let s=0
// const timer = setInterval(()=>{
//     snake.style.transform=`translate(0,${s+=2}px)`
//     if(s===780){
//         clearInterval(timer)
//     }
// },1)

let x=0,y=0;

const r = ()=>{
    clearInterval(left , right , up , down)
    const right = setInterval(()=>{snake.style.transform=`translate(${x++}px,${y}px)`},2)
}
const l = ()=>{
    clearInterval(left , right , up , down)
    const left = setInterval(()=>{snake.style.transform=`translate(${x--}px,${y}px)`},2)
}
const u = ()=>{
    clearInterval(left , right , up , down)
    const up = setInterval(()=>{snake.style.transform=`translate(${x}px,${y--}px)`},2)
}
const d = ()=>{
    clearInterval(left , right , up , down)
    const down = setInterval(()=>{snake.style.transform=`translate(${x}px,${y++}px)`},2)
}

document.addEventListener('keydown', e=>{
    if(e.key === 'ArrowRight'){
        r();
    }else if(e.key === 'ArrowLeft'){
        l()
    }else if(e.key === 'ArrowDown'){
        d()
    }else if(e.key === 'ArrowUp'){
        u()
    }
})

document.addEventListener('keydown', e=>{
    // console.log(e.key)
})

// const movement ={
//     TOP:'ArrowUp',
//     DOWN:'ArrowDown',
//     LEFT:'ArrowLeft',
//     Right:'ArrowRight'
// }