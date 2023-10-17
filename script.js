const buttons = document.querySelectorAll('.box');
const body = document.querySelector('body')

buttons.forEach(function (box){
    console.log(box);
    box.addEventListener('click', function (e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id;
        }
    })
    
})