function Celcius_to_Fahrenheit(c, f) {
  c = document.getElementById("celcius_input").value;
  f = c * (9 / 5) + 32;

  document.querySelector(".outputF").innerHTML = f + " \u00B0F";
}

function Fahrenheit_to_Celcius(f, c) {
  f = document.getElementById("fahrenheit_input").value;
  c = ((f - 32) * (5 / 9)).toFixed(2);

  document.querySelector(".outputC").innerHTML = c + " \u00B0C";
}
