function toggle() {
  const info = document.getElementById("extra");

  const button = document.querySelector("#accordion .head .button").textContent;
  if (button === "More") {
    document.querySelector("#accordion .head .button").textContent = "Less";
    info.style.display = 'block';
  } else {
    document.querySelector("#accordion .head .button").textContent = "More";
    info.style.display = 'none';
  }
}
