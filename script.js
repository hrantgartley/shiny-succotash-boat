// eslint-disable-next-line no-unused-vars
function calculateSpeed() {
  const weightInput = document.getElementById("weight");
  const horsepowerInput = document.getElementById("horsepower");
  const constant = parseFloat(document.getElementById("boat-type").value);
  const form = document.getElementById("calculator-form");

  const weight = parseFloat(weightInput.value);
  const horsepower = parseFloat(horsepowerInput.value);

  const speed = (horsepower / weight) * constant;

  if (weight > 45000) {
    alert("Weight must be less than 45000 lbs");
    weightInput.value = "";
    return;
  } else if (weight < 0) {
    alert("Weight must be greater than 0 lbs");
    weightInput.value = "";
    return;
  }

  if (horsepower > 750) {
    alert("Horsepower must be less than 750");
    horsepowerInput.value = "";
    return;
  } else if (horsepower < 0) {
    alert("Horsepower must be greater than 0");
    horsepowerInput.value = "";
    return;
  }

  document.getElementById("calculated-speed").textContent =
    speed.toFixed(2) + " knots";
  form.reset();
}
