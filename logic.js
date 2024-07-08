document.addEventListener("DOMContentLoaded",function(){
    const number = document.getElementById("number");
    const decrease = document.getElementById("decrease");
    const reset= document.getElementById("reset");
    const increase = document.getElementById("increase");
    let counter = 0; 


    decrease.addEventListener('click',function(){
        counter -=1;
        number.textContent = `${counter}`; 
        number.style.color = 'red';

    });

    reset.addEventListener('click',function(){
        counter = 0 ;
        number.textContent = `${counter}`; 
        number.style.color = 'black';
    });

    increase.addEventListener('click',function(){
        counter += 1 ;
        number.textContent = `${counter}`; 
        number.style.color = 'green';
    });

});