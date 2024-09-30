Folder structure for a Engineer-StudyHub Project

/Engineer-StudyHub
│
├── /backend # Backend-related code
│ ├── /controllers # API controllers and business logic
│ ├── /models # Database models (e.g., schemas for user, posts, etc.)
│ ├── /routes # API routes/endpoints
│ ├── /middlewares # Middleware functions (e.g., authentication, validation)
│ ├── /config # Configuration files (e.g., environment, database config)
│ ├── /services # Services like email, notifications, payment, etc.
│ ├── /utils # Utility/helper functions
│ ├── /database # Database-related files (e.g., migrations, seeds)
│ ├── app.js # Main application file (entry point, e.g., Express server)
│ ├── package.json # Backend dependencies and scripts
│ └── .env # Environment variables (e.g., API keys, DB connection strings)
│
├── /frontend # Frontend-related code (HTML, CSS, JS)
│ ├── /assets # Static assets (images, fonts, icons, etc.)
│ ├── /css # CSS stylesheets
│ │ └── main.css # Main CSS file
│ ├── /js # JavaScript files
│ │ └── main.js # Main JavaScript file
│ ├── /pages # HTML pages (e.g., home.html, about.html, etc.)
│ │ ├── index.html # Homepage
│ │ └── about.html # Example about page
│ └── /components # Reusable components (e.g., header, footer)
│ ├── header.html # Header component
│ └── footer.html # Footer component
│
├── /public # Publicly accessible files (frontend assets)
│ ├── /css # Compiled CSS files for production
│ ├── /js # Compiled JavaScript files for production
│ └── /images # Images, icons, and other static files
│
├── /test # Unit and integration tests
│ └── /api # API-related tests (e.g., Mocha, Jest)
│ └── /e2e # End-to-end tests (e.g., Cypress, Selenium)
│
├── /logs # Log files
│ └── error.log # Error log
│ └── access.log # Access log
│
├── .gitignore # Ignore files for Git (e.g., node_modules, logs, .env)
├── README.md # Project documentation
├── package.json # Frontend dependencies and scripts
└── .env # Frontend environment variables

Yash code

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Job Application Form</title>
  <link rel="stylesheet" href="css/Yashasvi_JobPortal_ApplicationProcess.css">
  <script defer src="Yashasvi_JobPortal_ApplicationProcess.js"></script>
</head>
<body>
<div class="form-container">
  <form id="job-application-form">
    <div class="div-fullname">
      <label for="fullName"class="label-fullname">Full Name: </label>
      <input type="text" id="fullName" name="fullName" required>
      <div class="error" id="nameError"></div>
    </div>
    <div class="div-email">
      <label for="email" class="label-email">Email: </label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="div-phone">
      <label for="phone" class="label-phone">Phone Number: </label>
      <input type="tel" id="phone" name="phone" required/>
      <div class="error" id="phoneError"></div>
    </div>
    <div class="div-gender">
      <label for="gender" class="label-gender">Select your Gender</label>
      <div>
        <input type="radio" id="male" name="gender" value="male" required/>
        <label for="male">Male</label>
      <div>
        <input type="radio" id="female" name="gender" value="female" required/>
        <label for="female">Female</label>
      </div>
      <div>
        <input type="radio" id="other" name="gender" value="other" required/>
        <label for="other">Other</label>
      </div>
    </div>
    <div class="div-degree">
      <label for="degree" class="label-degree">Degree: </label>
      <select id="degree" name="degree" class="select-degree" required>
        <option value="" disabled selected>Select your Degree</option>
        <option value="B.Tech">B.Tech</option>
        <option value="B.E">B.E</option>
        <option value="M.Tech">M.Tech</option>
        <option value="MBA">MBA</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div class="div-otherdegree" style="display:none;">
      <label for="otherdegree" class="label-otherdegree">If you have selected Other:</label>
      <input type="text" id="otherdegree" name="otherdegree" placeholder="Please Specify your degree">
      <div class="error" id="otherDegreeError"></div>
    </div>
    <div class="div-college">
      <label for="College" class="label-college">College Name: </label>
      <input type="text" id="College" name="College" required>
    </div>
    <div class="div-branch">
      <label for="branch" class="label-branch">Branch Name: </label>
      <input type="text" id="branch" name="branch" required/>
    </div>
    <div class="div-passedout">
      <label for="Passedout" class="label-passedout">Passed Out Year: </label>
      <input type="month" id="Passedout" name="Passedout" required>/
    </div>
    <div class="div-Address">
      <label for="Address" class="label-address">Address: </label>
      <textarea type="text"cols="32" rows="3" id="Address" name="Address"required></textarea>
    </div>
    <div class="div-resume">
      <label for="resume" class="label-resume">Upload Resume: </label>
      <input type="file" id="resume" name="resume" required/>
    </div>
    <button type="submit" class="apply">Apply</button>
  </form>
</div>
</body>
</html><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Job Application Form</title>
  <link rel="stylesheet" href="css/Yashasvi_JobPortal_ApplicationProcess.css">
  <script defer src="Yashasvi_JobPortal_ApplicationProcess.js"></script>
</head>
<body>
<div class="form-container">
  <form id="job-application-form">
    <div class="div-fullname">
      <label for="fullName"class="label-fullname">Full Name: </label>
      <input type="text" id="fullName" name="fullName" required>
      <div class="error" id="nameError"></div>
    </div>
    <div class="div-email">
      <label for="email" class="label-email">Email: </label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="div-phone">
      <label for="phone" class="label-phone">Phone Number: </label>
      <input type="tel" id="phone" name="phone" required/>
      <div class="error" id="phoneError"></div>
    </div>
    <div class="div-gender">
      <label for="gender" class="label-gender">Select your Gender</label>
      <div>
        <input type="radio" id="male" name="gender" value="male" required/>
        <label for="male">Male</label>
      <div>
        <input type="radio" id="female" name="gender" value="female" required/>
        <label for="female">Female</label>
      </div>
      <div>
        <input type="radio" id="other" name="gender" value="other" required/>
        <label for="other">Other</label>
      </div>
    </div>
    <div class="div-degree">
      <label for="degree" class="label-degree">Degree: </label>
      <select id="degree" name="degree" class="select-degree" required>
        <option value="" disabled selected>Select your Degree</option>
        <option value="B.Tech">B.Tech</option>
        <option value="B.E">B.E</option>
        <option value="M.Tech">M.Tech</option>
        <option value="MBA">MBA</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div class="div-otherdegree" style="display:none;">
      <label for="otherdegree" class="label-otherdegree">If you have selected Other:</label>
      <input type="text" id="otherdegree" name="otherdegree" placeholder="Please Specify your degree">
      <div class="error" id="otherDegreeError"></div>
    </div>
    <div class="div-college">
      <label for="College" class="label-college">College Name: </label>
      <input type="text" id="College" name="College" required>
    </div>
    <div class="div-branch">
      <label for="branch" class="label-branch">Branch Name: </label>
      <input type="text" id="branch" name="branch" required/>
    </div>
    <div class="div-passedout">
      <label for="Passedout" class="label-passedout">Passed Out Year: </label>
      <input type="month" id="Passedout" name="Passedout" required>/
    </div>
    <div class="div-Address">
      <label for="Address" class="label-address">Address: </label>
      <textarea type="text"cols="32" rows="3" id="Address" name="Address"required></textarea>
    </div>
    <div class="div-resume">
      <label for="resume" class="label-resume">Upload Resume: </label>
      <input type="file" id="resume" name="resume" required/>
    </div>
    <button type="submit" class="apply">Apply</button>
  </form>
</div>
</body>
</html>

const form = document.getElementById('job-application-form');
const degreeSelect = document.getElementById('degree');
const otherDegreeDiv = document.querySelector('.div-otherdegree');
const otherDegreeInput = document.getElementById('otherdegree');
degreeSelect.addEventListener('change', function () {
if (degreeSelect.value === 'Other') {
otherDegreeDiv.style.display = 'block';
} else {
otherDegreeDiv.style.display = 'none';
otherDegreeInput.value = '';
}
});
function validateForm(event) {
event.preventDefault();

    let isValid = true;
    const fullName = document.getElementById('fullName').value.trim();
    const nameError = document.getElementById('nameError');
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(fullName)) {
      nameError.textContent = 'Only letters allowed in name.';
      isValid = false;
    } else {
      nameError.textContent = '';
    }
    const phone = document.getElementById('phone').value.trim();
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phone)) {
      phoneError.textContent = 'Phone number must be 10 digits.';
      isValid = false;
    } else {
      phoneError.textContent = '';
    }
    const degree = degreeSelect.value;
    const otherDegreeError = document.getElementById('otherDegreeError');
    if (degree === 'Other' && otherDegreeInput.value.trim() === '') {
      otherDegreeError.textContent = 'Please specify your degree.';
      isValid = false;
    } else {
      otherDegreeError.textContent = '';
    }
    if (isValid) {
      document.body.innerHTML =`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <h1 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 2rem;">
        Thank you for submitting your application!
      </h1>
    </div>`;
    }

}
form.addEventListener('submit', validateForm);
