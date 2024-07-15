const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateBtn = document.getElementById("calculate-btn");
const bmiResult = document.getElementById("bmi-result");
const classificationResult = document.getElementById("classification-result");

calculateBtn.addEventListener("click", calculateBMI);

function calculateBMI() {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    const bmi = weight / (height ** 2);

    bmiResult.textContent = `Your BMI is: ${bmi.toFixed(2)}`;

    if (bmi < 18) {
        classificationResult.textContent = "Classification: Underweight";
    } else if (bmi < 25) {
        classificationResult.textContent = "Classification: Normal weight";
    } else if (bmi < 30) {
        classificationResult.textContent = "Classification: Overweight";
    } else {
        classificationResult.textContent = "Classification: Obese";
    }
}