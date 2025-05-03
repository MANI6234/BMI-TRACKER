function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const result = document.getElementById("result");
  const tip = document.getElementById("tip");

  if (!weight || !height || weight <= 0 || height <= 0) {
    result.textContent = "Please enter valid weight and height.";
    return;
  }

  const heightM = height / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(2);
  let category = "";
  let advice = "";

  if (bmi < 18.5) {
    category = "Underweight";
    advice = "Eat more nutrient-rich food and do strength training.";
  } else if (bmi < 24.9) {
    category = "Normal";
    advice = "Great job! Maintain a healthy diet and regular exercise.";
  } else if (bmi < 29.9) {
    category = "Overweight";
    advice = "Try to include more cardio in your routine.";
  } else {
    category = "Obese";
    advice = "Consider consulting a health professional for a plan.";
  }

  result.textContent = `Your BMI is ${bmi} (${category})`;
  tip.textContent = `Tip: ${advice}`;

  saveBMIHistory(bmi, category);
}

function saveBMIHistory(bmi, category) {
  const history = JSON.parse(localStorage.getItem("bmiHistory")) || [];
  history.unshift({ bmi, category, date: new Date().toLocaleString() });
  localStorage.setItem("bmiHistory", JSON.stringify(history));
  loadBMIHistory();
}

function loadBMIHistory() {
  const history = JSON.parse(localStorage.getItem("bmiHistory")) || [];
  const list = document.getElementById("history");
  if (list) {
    list.innerHTML = "";
    history.forEach(entry => {
      const li = document.createElement("li");
      li.textContent = `${entry.date}: ${entry.bmi} (${entry.category})`;
      list.appendChild(li);
    });
  }
}

function calculateWHtR() {
  const waist = parseFloat(document.getElementById("waist").value);
  const height = parseFloat(document.getElementById("height").value);
  const result = document.getElementById("whtrResult");

  if (!waist || !height || waist <= 0 || height <= 0) {
    result.textContent = "Please enter valid waist and height.";
    return;
  }

  const whtr = (waist / height).toFixed(2);
  let status = "";

  if (whtr < 0.5) {
    status = "Excellent – Low risk";
  } else if (whtr < 0.6) {
    status = "Moderate risk";
  } else {
    status = "High risk – Consider fat reduction";
  }

  result.textContent = `Your WHtR is ${whtr} (${status})`;

  saveWHtRHistory(whtr, status);
}

function saveWHtRHistory(whtr, status) {
  const history = JSON.parse(localStorage.getItem("whtrHistory")) || [];
  history.unshift({ whtr, status, date: new Date().toLocaleString() });
  localStorage.setItem("whtrHistory", JSON.stringify(history));
  loadWHtRHistory();
}

function loadWHtRHistory() {
  const history = JSON.parse(localStorage.getItem("whtrHistory")) || [];
  const list = document.getElementById("whtrHistory");
  if (list) {
    list.innerHTML = "";
    history.forEach(entry => {
      const li = document.createElement("li");
      li.textContent = `${entry.date}: ${entry.whtr} (${entry.status})`;
      list.appendChild(li);
    });
  }
}