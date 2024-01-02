shoppingCartBtn.onclick = () =>{
    if(window.window.innerWidth < 1000)
        shoppingCartPage.style.top = '0%'
    else{
        shoppingCartPage.style.top = '5%'
    }
}
closeSCP.onclick = () =>{
    shoppingCartPage.style.top = '-150%'
}