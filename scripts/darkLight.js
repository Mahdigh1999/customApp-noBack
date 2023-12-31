const darkModeStatus = JSON.parse(localStorage.getItem("darkLight"));
darkLightBox.addEventListener("click", handlePageColor);
function makeDark(isDark) {
  if (isDark) {
    document.body.className = "dark";
    darkLightImg.src = "./data/images/darkLight/night-mode.png";
    darkLightLabel.innerHTML = "Dark Mode";
  } else {
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

