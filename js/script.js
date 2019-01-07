
// Run function upon click.
document.onclick = makeDiv;

function makeDiv(elem) {

  const location = document.querySelector(".coordinates");

  // Create random hex color.
  let color = Math.round(0xffffff * Math.random()).toString(16);

  // Stop the leading zeros from getting stripped off the front for colors like #000ABC or #001234.
  if (color.length <= 5) {
    // Keep adding zeros until the length reaches six.
    for (let i = 0; color.length < 6; i++) {
      color = '0' + color;
    }
    // Add the octothorpe character to front of string because this is a hex color.
    color = "#" + color;
  } else {
    color = "#" + color;
  }

  // Create a random number for the size of the div.
  const dimentions = Math.floor((Math.random() * 100) + 10);

  // Display the window width and height.
  const win = document.querySelector(".window-size");
  win.textContent = `H: ${window.innerHeight} W: ${window.innerWidth}`;

  // Display coordinates of cursor on click.
  location.textContent = `X: ${elem.clientX} Y: ${elem.clientY}`;

  // Create a new div element.
  let circle = document.createElement("div");

  // Add the .circle class.
  circle.classList.add("circle");

  // Set the width and height.
  circle.style.width = dimentions + "px";
  circle.style.height = dimentions + "px";

  // Set the random background color.
  circle.style.backgroundColor = color;

  // Position the div on the page.
  circle.style.top = (elem.clientY - 50) + "px";
  circle.style.left = (elem.clientX - 50) + "px";

  // Append the div to the article element.
  document.querySelector("article").appendChild(circle);
}
