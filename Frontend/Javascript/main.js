function loadHTML() {
  // Load header
  fetch("../components/header.html")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));

  // Load footer
  fetch("../components/footer.html")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
}

// Call the function to load components
loadHTML();

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faqq");

  faqItems.forEach(function (faqItem) {
    const question = faqItem.querySelector(".question");

    question.addEventListener("click", function () {
      // Toggle active class on clicked faqq
      faqItem.classList.toggle("active");

      // Close other faqq items
      faqItems.forEach(function (item) {
        if (item !== faqItem) {
          item.classList.remove("active");
        }
      });
    });
  });
});

const firebaseConfig = {
  apiKey: "AIzaSyAVhXdOBbfDm9EFVgGfK_1dcrEg6MF5T0o",
  authDomain: "rtmnu-studyhub.firebaseapp.com",
  databaseURL: "https://rtmnu-studyhub-default-rtdb.firebaseio.com",
  projectId: "rtmnu-studyhub",
  storageBucket: "rtmnu-studyhub.appspot.com",
  messagingSenderId: "224044049969",
  appId: "1:224044049969:web:5f43d8b9c5667a8c319710",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    password: name,
    email: emailid,
    collegeName: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
