let pos = 0;
rightClick.onclick = function () {
  pos >= 400 ? (pos = 0) : (pos = pos + 100);
  gallery.style.left = -pos + "%"; // left : 0 click left: -100% click left : -200%
};
leftClick.onclick = function () {
  pos <= 0 ? (pos = 400) : (pos = pos - 100);
  gallery.style.left = -pos + "%";
};

closeMM.addEventListener("click", () => {
  movieModal.style.left = "-150%";
});
const openModal = (movie) => {
  if(window.innerWidth<1000)
    movieModal.style.left = "0.5%";
  else{
    movieModal.style.left = "5%";
  }
  
  gallery.innerHTML = "";
  gallery.style.left = "0";
  // gallery.style.width = (movie.images.length * 100 ) + '%';
  movie.images.forEach((image) => {
    let div = document.createElement("div");
    div.className = "items";
    let img = document.createElement("img");
    img.src = image;
    div.appendChild(img);
    gallery.appendChild(div);
  });
  modalInfo.innerHTML = "";
  const nameSpan = document.createElement("span");
  nameSpan.innerHTML = "Name :" + movie.movieName;
  modalInfo.appendChild(nameSpan);
  const genreSpan = document.createElement("span");
  genreSpan.innerHTML = "Genre :" + movie.movieGenre;
  modalInfo.appendChild(genreSpan);
  const dateSpan = document.createElement("span");
  dateSpan.innerHTML =
    "ReleaseDate :" +
    movie.releaseDate.toString().slice(0, 4) +
    "/" +
    movie.releaseDate.toString().slice(4, 6) +
    "/" +
    movie.releaseDate.toString().slice(6, 9);
  modalInfo.appendChild(dateSpan);
  const allCreatorsSpan = document.createElement("span");
  let creatorsStr = " ";
  for (let i in movie.creators) {
    creatorsStr += movie.creators[i] + " ,";
  }
  allCreatorsSpan.innerHTML = "All Creators :" + creatorsStr; //make a all cretors in db
  modalInfo.appendChild(allCreatorsSpan);

  const offTimeSpan = document.createElement("span");
  offTimeSpan.innerHTML = "Off Time :" + movie.offTime;
  modalInfo.appendChild(offTimeSpan);

  const existSpan = document.createElement("span");
  existSpan.innerHTML = "Stock  :" + movie.stock;
  modalInfo.appendChild(existSpan);

  const IMDBSpan = document.createElement("span");
  IMDBSpan.innerHTML = "IMDB :" + movie.rate;
  modalInfo.appendChild(IMDBSpan);

  const discribeSpan = document.createElement("span");
  discribeSpan.className = "discribe";
  const pDiscribtion = document.createElement("p");
  pDiscribtion.innerHTML = movie.discribe;

  discribeSpan.innerHTML = "Discribtion : ";
  discribeSpan.appendChild(pDiscribtion);
  modalInfo.appendChild(discribeSpan);

  const addToBascket = document.createElement("button");
  const ASCSvg = `<svg
                    class="darkLight"
                    fill = ${
                        JSON.parse(localStorage.getItem("darkLight")).dark ? "#fff" : "#111"
                      }
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="18"
                    viewBox="0 0 576 512"
                    >
                    <path
                    d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                    />
                </svg>`;
  addToBascket.innerHTML = "Add To Shpping Cart" + ASCSvg;

  if (!movie.stock){
    addToBascket.setAttribute('disabled',true);
    addToBascket.className = 'addToBascket disabled';
  }
  else{
    addToBascket.className = 'addToBascket';
  }
  addToBascket.addEventListener('click',() => addToSoppingCart(movie))
  modalInfo.appendChild(addToBascket);
};
const addToSoppingCart = (movie) => {
    let shoppingCart =  JSON.parse(localStorage.getItem('shoppingCart'));
    if(!shoppingCart)
        shoppingCart = [];
    let scId = movie.id;
    let scName = movie.movieName;
    let scPrice = movie.price;
    let scRate = movie.rate;
    let exist = shoppingCart.find(localStorageMovie => localStorageMovie.scId == movie.id)
    let count =1 ;
    if(exist){
        exist.count ++ ;
        
    }
        else{
        shoppingCart.push({scId,scName,scPrice,scRate,count})
        let number = shoppingCart.indexOf(localStorageMovie => localStorageMovie.scId == movie.id)

    }
    localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));
    // console.log(JSON.parse(localStorage.getItem('shoppingCart')));
    

}













function renderShoppingCartItem({scId,scName,scPrice,scRate,count}){
    let shoppingCart =  JSON.parse(localStorage.getItem('shoppingCart'));
    // console.log(shoppingCart.length);
    let initialVal = 0 ;
    const total = shoppingCart.reduce((acc , item) => acc + ((item.count) * (item.scPrice)),initialVal)

    totalPrice.innerHTML = 'Total Price : ' + total + '$';
    const number = shoppingCart.findIndex(localStorageMovie => localStorageMovie.scId == scId) +1;
    const SCHItems = document.createElement('div');
    SCHItems.className = 'SCHItems';

    const buttonsDiv = document.createElement('div');
    const minusBtn = document.createElement('button');
    minusBtn.innerHTML = '-';

    minusBtn.addEventListener('click',()=>{
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    const ourIndex = shoppingCart.findIndex(m => m.scId == scId);
    
    if(shoppingCart[ourIndex].count <= 1){
        shoppingCart.splice(ourIndex,1);
    }
    else{
        shoppingCart[ourIndex].count --;
        console.log( shoppingCart[ourIndex].count);
    }
    shoppingCartHolder.innerHTML = '';
    localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));
    if(shoppingCart.length === 0 )
        renderEmptySC();
    shoppingCart.forEach(m =>{
        renderShoppingCartItem(m);
    })
    console.log(shoppingCart);

});


    buttonsDiv.appendChild(minusBtn);
    const plusBtn = document.createElement('button');
    plusBtn.innerHTML = '+';
    plusBtn.addEventListener('click',()=>{
        const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        const ourIndex = shoppingCart.findIndex(m => m.scId == scId);
        

        
        shoppingCart[ourIndex].count ++;
        console.log( shoppingCart[ourIndex].count);
        
        shoppingCartHolder.innerHTML = '';
        localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));
        shoppingCart.forEach(m =>{
            renderShoppingCartItem(m);
        })
        
    })
    buttonsDiv.appendChild(plusBtn);
    SCHItems.appendChild(buttonsDiv);
    
    
    const numberSpan = document.createElement('span');
    numberSpan.innerHTML = 'Number :' + number; 
    SCHItems.appendChild(numberSpan);

    const countSpan = document.createElement('span')
    countSpan.innerHTML = 'Count :' + count;
    SCHItems.appendChild(countSpan);

    const nameSpan = document.createElement('span')
    nameSpan.innerHTML = 'Name :' + scName;
    SCHItems.appendChild(nameSpan);

    const priceSpan = document.createElement('span')
    priceSpan.innerHTML = 'Price :' + scPrice;
    SCHItems.appendChild(priceSpan);

    const rateSpan = document.createElement('span')
    rateSpan.innerHTML = 'Rate :' + scRate;
    SCHItems.appendChild(rateSpan);

    shoppingCartHolder.appendChild(SCHItems);
    

}
function renderEmptySC(){
    
    const emptySC = document.createElement('h1');
    emptySC.innerHTML = "NOTHING IN YOUR SHOPING CART :(";
    shoppingCartHolder.appendChild(emptySC);    
    console.log(shoppingCart);
    return null;
    
}

