let pos = 0;
rightClick.onclick = function (){
    pos >= 400 ? pos = 0 : pos = pos + 100 ; 
    gallery.style.left = -pos+"%" ; // left : 0 click left: -100% click left : -200%

}
leftClick.onclick = function (){
    pos <= 0 ? pos = 400 : pos = pos - 100;
    gallery.style.left = -pos + '%'; 
}


closeMM.addEventListener('click' , ()=>{

    movieModal.style.left = '-150%'
})
const openModal = (movie) =>{
    movieModal.style.left = '5%'
    gallery.innerHTML = '';
    movie.images.forEach(image =>{
        let div = document.createElement('div');
        div.className = 'items'
        let img = document.createElement('img');
        img.src = image;
        div.appendChild(img);
        gallery.appendChild(div);
    }
        
    )
  }