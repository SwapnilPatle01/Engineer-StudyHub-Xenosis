let currentStep = 1;

function nextStep() {
  const role = document.getElementById("role").value;

  if (currentStep === 1) {
    document.getElementById("step1").style.display = "none";
    if (role === "company") {
      document.getElementById("step2").style.display = "block";
    } else {
      document.getElementById("step3").style.display = "block";
    }
    document.getElementById("previousBtn").style.display = "inline-block";
    updateProgress(role);
    currentStep = role === "company" ? 2 : 3;
  } else if (currentStep === 2 && role === "company") {
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "block";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("submitBtn").style.display = "inline-block";
    updateProgress(role);
    currentStep = 3;
  }
}

function previousStep() {
  const role = document.getElementById("role").value;

  if (currentStep === 2 && role === "company") {
    document.getElementById("step2").style.display = "none";
    document.getElementById("step1").style.display = "block";
    document.getElementById("previousBtn").style.display = "none";
    updateProgress(role);
    currentStep = 1;
  } else if (currentStep === 3) {
    document.getElementById("step3").style.display = "none";
    if (role === "company") {
      document.getElementById("step2").style.display = "block";
    } else {
      document.getElementById("step1").style.display = "block";
    }
    document.getElementById("submitBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "inline-block";
    updateProgress(role);
    currentStep = role === "company" ? 2 : 1;
  }
}

function updateProgress(role) {
  const progress = document.querySelector(".progress-bar::before");
  const stepCount = role === "company" ? 3 : 2;
  const progressPercentage = (currentStep / stepCount) * 100;
  document.querySelector(
    ".progress-bar::before"
  ).style.width = `${progressPercentage}%`;
}
