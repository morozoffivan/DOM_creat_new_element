const body = document.querySelector('body');

const div = document.createElement('div');
body.appendChild(div);
div.classList.add('red');

div.addEventListener('click', (e) => {
    console.log(e.target.classList.value);
    
    if(e.target.classList.value === 'red') {
        setTimeout(()=> {
            e.target.classList.remove('red');
            e.target.classList.add('blue');
        }, 200)

    }else{
        setTimeout(()=> {
            e.target.classList.remove('blue');
            e.target.classList.add('red');
        }, 200)

    }

})