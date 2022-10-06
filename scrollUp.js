window.onscroll = function(){
    if (document.documentElement.scrollTop > 300){
        document.querySelector('.go-top-container')
        .classList.add('show');
    } else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', () =>{
Window.scrollTop({
        top: 0,
        behavior: 'smooth'
    })
});