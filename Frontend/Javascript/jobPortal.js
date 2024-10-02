function selectDropdownItem(element) {
  let selectedText = element.textContent;
  console.log(selectedText);
}

function getValueFromInput() {
  let searchValue = document.querySelector(".search").value;
  console.log(searchValue);
}
document.getElementById("openSideBar").onclick = function () {
  document.getElementById("sideBar").style.right = "0"; // Show sidebar
};

document.getElementById("closeSideBar").onclick = function () {
  document.getElementById("sideBar").style.right = "1900px"; // Hide sidebar
};

/// new js

const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close");

// Toggle sidebar when hamburger is clicked
hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
  document.body.classList.add("sidebar-active");
});

// Close sidebar when close button is clicked
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  document.body.classList.remove("sidebar-active");
});

//add event on job search filter

document.addEventListener("DOMContentLoaded", function () {
  let cardContainer = document.querySelector(".cardContainer");
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(form);

    // Log all the form values to the console
    console.log("Form Data: ");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    cardContainer.innerHTML =
      cardContainer.innerHTML +
      `<h2 class="result">Here are the result for your search:</h2>`;

    form.reset();
  });
});
