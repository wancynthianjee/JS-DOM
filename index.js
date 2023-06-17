document.getElementById('heading').style.color='#bf9da3';
document.getElementById('heading').style.backgroundColor='#6f5450';

document.getElementById('intro').innerHTML='My name is Cynthia  and i am 21 years old';
document.getElementById('intro').style.fontSize='18px';
 let paragraph =document.createElement('p');
 paragraph.innerHTML= ' I am new'
 document.getElementById('container').appendChild(paragraph);
//  document.getElementById('container').removeChild(paragraph);
 let child = document.getElementById('container').children;
console.log({child});

let button = document.getElementById('button');
button.addEventListener('click',function(){
button.innerHTML='clicked !!!';
})

document.getElementById('container').setAttribute('class', 'containers');
