// eslint-disable-next-line no-unused-vars
function calculateSpeed() {
    const weight = parseFloat(document.getElementById("weight").value);
    const horsepower = parseFloat(document.getElementById("horsepower").value);
    const constant = parseFloat(document.getElementById("boat-type").value);
    const form = document.getElementById("calculator-form");

    const speed = (horsepower / weight) * constant;
    if (weight > 45000) {
        alert("Weight must be less than 45000 lbs");
        return;
    } else if (weight < 0) {
        alert("Weight must be greater than 0 lbs");
        return;
    }
    if (horsepower > 750) {
        alert("Horsepower must be less than 750");
        return;
    } else if (horsepower < 0) {
        alert("Horsepower must be greater than 0");
        return;
    }

    document.getElementById("calculated-speed").textContent =
        speed.toFixed(2) + " knots";
    form.reset();
}
