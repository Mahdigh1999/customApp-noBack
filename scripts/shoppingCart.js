shoppingCartBtn.addEventListener('click', () =>{
    if(window.window.innerWidth < 1000)
        shoppingCartPage.style.top = '0%'
    else{
        shoppingCartPage.style.top = '5%'
    } 
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

    shoppingCartHolder.innerHTML = '';
    if(shoppingCart.length === 0 || !shoppingCart )
        renderEmptySC();
    shoppingCart.forEach(item => {
        calcTotalPrice();    
        renderShoppingCartItem(item)
    })
    
    

    
})
closeSCP.onclick = () =>{
    shoppingCartPage.style.top = '-150%'
}