const darkModeStatus = JSON.parse(localStorage.getItem("darkLight"));
darkLightBox.addEventListener("click", handlePageColor);
function makeDark(isDark) {
  if (isDark) {
    for(let i of document.getElementsByClassName("likeSVG")){
      i.style.fill = '#fff'
    }
    // likeSVG.style.fill = '#fff'
    document.body.className = "dark";
    darkLightImg.src = "./data/images/darkLight/night-mode.png";
    darkLightLabel.innerHTML = "Dark Mode";
  } else {
    for(let i of document.getElementsByClassName("likeSVG")){
      i.style.fill = '#111'
    }
    // likeSVG.style.fill = '#111'
    // document.getElementsByClassName("likeSVG").style.fill ==='#111';
    document.body.className = "light";
    darkLightImg.src = "./data/images/darkLight/brightness.png";
    darkLightLabel.innerHTML = "Light Mode";
  }
}
makeDark(darkModeStatus.dark);
function handlePageColor() {
  const darkModeStatus = JSON.parse(localStorage.getItem("darkLight"))
    ? JSON.parse(localStorage.getItem("darkLight"))
    : { dark: true };

  darkModeStatus.dark = !darkModeStatus.dark;
  makeDark(darkModeStatus.dark);
  localStorage.setItem("darkLight", JSON.stringify(darkModeStatus));
}

