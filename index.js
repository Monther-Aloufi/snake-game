'use strict'

// max x:1480
// max y:780

const snake = document.querySelector('.snake');
const food = document.querySelector('.food')
// let s=0
// const timer = setInterval(()=>{
//     snake.style.transform=`translate(0,${s+=2}px)`
//     if(s===780){
//         clearInterval(timer)
//     }
// },1)

let xs=0,ys=0,
    xf=parseInt(Math.random() * 1480),yf=parseInt(Math.random() * 780),
    count=0, movement;
const m = (dir)=>{
    count =1;
    movement = setInterval(()=>{
        snake.style.transform=`translate(${
            dir === 'right'? xs++ : dir === 'left'? xs-- : xs
        }px,${
            dir === 'up'? ys-- : dir === 'down'? ys++ :ys
        }px)`
        // console.log(xs)
        if(xs === 1480 || xs < 0 || ys === 780 || ys < 0){
            clearInterval(movement)
            console.log('Game Over')
        }
        if(xf >= xs-10 && xf <= xs+10 && yf >= ys-10 && yf <= ys+10){
        // if(xf == xs && yf == ys){
            console.log('snake: ',xs,',', ys, ' food: ', xf, ',', yf)
            xf = parseInt(Math.random() * 1480)
            yf = parseInt(Math.random() * 780)
            food.style.transform=`translate(${xf}px, ${yf}px)`
        }
        food.style.transform=`translate(${xf}px, ${yf}px)`
    },10)
}

document.addEventListener('keydown', e=>{
    
    
    if(e.key === 'ArrowRight'){
        if(count === 1){
            clearInterval(movement)
            count = 0
        }
        m('right');
    }else if(e.key === 'ArrowLeft'){
        if(count === 1){
            clearInterval(movement)
            count = 0
        }
        m('left')
    }else if(e.key === 'ArrowDown'){
        if(count === 1){
            clearInterval(movement)
            count = 0
        }
        m('down')
    }else if(e.key === 'ArrowUp'){
        if(count === 1){
            clearInterval(movement)
            count = 0
        }
        m('up')
    }
})

document.addEventListener('keydown', e=>{
    // console.log(e.key)
})