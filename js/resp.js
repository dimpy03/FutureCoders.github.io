burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightnavbar = document.querySelector('.rightnavbar')



burger.addEventListener('click', ()=>{
rightnavbar.classList.toggle('v-class-resp');
navlist.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');

})