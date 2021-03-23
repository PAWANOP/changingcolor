const button =document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red','yellow','blue','green','purple'];


body.style.backgroundColor='violet'
button.addEventListener('click',changebackground)

function changebackground(){
  let colorindex=parseInt(Math.random()*colors.length);
  body.style.backgroundColor= colors[colorindex]
}

