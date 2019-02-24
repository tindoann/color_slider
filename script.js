/*Grab Sliders, Demo area and HSL Text*/
let inputs = document.querySelectorAll(".control-area input");
let demo = document.querySelector(".demo-area");
let hslValueText = document.querySelector(".demo-area h2");

/*Function that changes HSL value of background*/
function updateValue() {
  const suffix = this.dataset.unit || "";
  demo.style.setProperty(`--${this.name}`, this.value + suffix);
  hslValueText.innerHTML = `HSL (${hue.value}, ${sat.value}%, ${light.value}%, ${alpha.value}%)`;
  /*If Light is less than 50% make text light, if more than 50% make it dark*/
  if (light.value < 50) {
    hslValueText.classList.add("white-text");
    hslValueText.classList.remove("black-text");
  } else {
    hslValueText.classList.add("black-text");
    hslValueText.classList.remove("white-text");
  }
}

/*Event Listeners*/
inputs.forEach(input => {
  input.addEventListener("change", updateValue);
});

inputs.forEach(input => {
  input.addEventListener("mousemove", updateValue);
});
