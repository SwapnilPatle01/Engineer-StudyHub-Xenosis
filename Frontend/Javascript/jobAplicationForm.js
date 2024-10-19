const form = document.getElementById("job-application-form");
const degreeSelect = document.getElementById("degree");
const otherDegreeDiv = document.querySelector(".div-otherdegree");
const otherDegreeInput = document.getElementById("otherdegree");
degreeSelect.addEventListener("change", function () {
  if (degreeSelect.value === "Other") {
    otherDegreeDiv.style.display = "block";
  } else {
    otherDegreeDiv.style.display = "none";
    otherDegreeInput.value = "";
  }
});
function validateForm(event) {
  event.preventDefault();

  let isValid = true;
  const fullName = document.getElementById("fullName").value.trim();
  const nameError = document.getElementById("nameError");
  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(fullName)) {
    nameError.textContent = "Only letters allowed in name.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }
  const phone = document.getElementById("phone").value.trim();
  const phoneError = document.getElementById("phoneError");
  const phoneRegex = /^\d{10}$/;

  if (!phoneRegex.test(phone)) {
    phoneError.textContent = "Phone number must be 10 digits.";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }
  const degree = degreeSelect.value;
  const otherDegreeError = document.getElementById("otherDegreeError");
  if (degree === "Other" && otherDegreeInput.value.trim() === "") {
    otherDegreeError.textContent = "Please specify your degree.";
    isValid = false;
  } else {
    otherDegreeError.textContent = "";
  }
  if (isValid) {
    document.body.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <h1 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 2rem;">
        Thank you for submitting your application!
      </h1>
    </div>`;
  }
}
form.addEventListener("submit", validateForm);
