const darkModeStatus = JSON.parse(localStorage.getItem("darkLight"));
darkLightBox.addEventListener("click", handlePageColor);
if(darkModeStatus)
  makeDark(darkModeStatus.dark);
else{
  const darkLight = {dark:false}
  localStorage.setItem('darkLight',JSON.stringify(darkLight));
}

function makeDark(isDark) {
  const darkFills = '#fff';
  const lightFills = '#111';
  const lightBackground = '#ddd';
  const darkBackground ='#333';

  if (isDark) {
    flexibleColorFills(darkFills);
    flexibleColorItems(darkBackground);  
    bodyColorAndDarkLightBtn(isDark);
  } 
  else {
    bodyColorAndDarkLightBtn(isDark);
    flexibleColorFills(lightFills);
    flexibleColorItems(lightBackground);
  }
 
}

function handlePageColor() {
  const darkModeStatus = JSON.parse(localStorage.getItem("darkLight"))
    ? JSON.parse(localStorage.getItem("darkLight"))
    : { dark: true };

  darkModeStatus.dark = !darkModeStatus.dark;
  makeDark(darkModeStatus.dark);
  localStorage.setItem("darkLight", JSON.stringify(darkModeStatus));
}

function flexibleColorFills(color){
  for(let i of document.getElementsByClassName("darkLight")){
    i.style.fill = color;
  }
}

function bodyColorAndDarkLightBtn(darkStat){
  if(darkStat){
    document.body.className = "dark";
    darkLightImg.src = "./data/images/darkLight/night-mode.png";
    darkLightLabel.innerHTML = "Dark Mode";
  }
  else{
    document.body.className = "light";
    darkLightImg.src = "./data/images/darkLight/brightness.png";
    darkLightLabel.innerHTML = "Light Mode";
  }
}


function flexibleColorItems(color) {
  const flex = document.getElementsByClassName("flex-color");
  for(let i in flex){
      if((typeof flex[i]) == "object"){
        // console.log(typeof flex[i] , flex[i]);
        flex[i].style.backgroundColor = color;

      }
        
  }


}
