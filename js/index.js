// For Text Typing
let type_txt = document.getElementById('typing-txt');
let name = "Web Developer";
let index = 1;
const typeWriter = ()=>{
    let newTitle = name.slice(0,index);
    type_txt.innerHTML = newTitle
    // index++
    index>name.length++? index=1:index++

    setTimeout(typeWriter,350)
}

typeWriter()

// For Nav BGColor

const navBar = document.getElementById('nav-home');
window.addEventListener('scroll',()=>{
    if(window.scrollY > 12){
       navBar.classList.add('nav-scroll')
    }
    else{
        navBar.classList.remove('nav-scroll')
    }
})


// For Toggle

const navLink = document.getElementById('nav-link');
const toggle = document.getElementById('toggle');
toggle.addEventListener('click',()=>{
    navLink.classList.toggle('active')
})
