function updateTabs() {
  var subjectsDropdown = document.getElementById("subjects");
  var selectedSubject = subjectsDropdown.value;
  var selectedStream = document.getElementById("stream").value;

  // Fetch data from JSON file
  fetch("subjects.json")
    .then((response) => response.json())
    .then((data) => {
      // Get the content for the selected subject and stream
      var subjectData = data[selectedStream][selectedSubject];

      // Display the selected subject's tab content
      displayTabContent(subjectData);
    })
    .catch((error) => console.error("Error fetching JSON:", error));

  // Select the "PYQ" tab by default after updating the subject options
  var pyqTab = document.getElementById("pyq");
  var pyqTabButton = document.querySelector(
    ".tab-menu-container .tab:nth-child(1)"
  );
  pyqTab.style.display = "block";
  pyqTabButton.classList.add("active");
}

function updateSubjects() {
  var streamDropdown = document.getElementById("stream");
  var subjectsDropdown = document.getElementById("subjects");

  // Clear previous options
  subjectsDropdown.innerHTML = "";

  // Get selected stream
  var selectedStream = streamDropdown.value;

  // Fetch data from JSON file
  fetch("subjects.json")
    .then((response) => response.json())
    .then((data) => {
      // Add new options based on the selected stream
      addOption(subjectsDropdown, "", "Choose Your Subject");

      Object.keys(data[selectedStream]).forEach((subject) => {
        addOption(subjectsDropdown, subject, subject);
      });

      // Update tabs when the subjects are changed
      updateTabs();

      // Check if this is the first time subjects are updated
      if (!subjectsDropdown.dataset.initialized) {
        // Select the "PYQ" tab by default on the first initialization
        openTab("pyq");
        subjectsDropdown.dataset.initialized = true;
      }
    })
    .catch((error) => console.error("Error fetching JSON:", error));
}

function addOption(selectElement, value, text) {
  var option = document.createElement("option");
  option.value = value;
  option.text = text;
  selectElement.add(option);
}

function openTab(tabName) {
  var i, tabContent, tabLinks;

  // Hide all tab contents
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Remove the 'active' class from all tab links
  tabLinks = document.getElementsByClassName("tab");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  // Display the selected tab content
  document.getElementById(tabName).style.display = "block";

  // Add the 'active' class to the clicked tab
  event.currentTarget.classList.add("active");
}

// Function to display the selected tab content
function displayTabContent(subjectData) {
  var tabContent = document.getElementsByClassName("tab-content");

  // Hide all tab contents
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active");
  }

  // Display the selected subject's tab content
  updatePYQAndNotes(subjectData);
  updateVideos(subjectData);

  // Add the active class to the corresponding tab
  var activeTabId = subjectData.videos
    ? "videos"
    : subjectData.pyq
    ? "pyq"
    : "notes";
  document.getElementById(activeTabId).classList.add("active");
}

// Initialize subjects based on the default stream
updateSubjects();

// Function to update the "PYQ" and "Notes" tabs
function updatePYQAndNotes(subjectData) {
  var pyqContainer = document.getElementById("pyq");
  var notesContainer = document.getElementById("notes");

  // Clear previous content
  pyqContainer.innerHTML = "";
  notesContainer.innerHTML = "";

  // PYQ tab
  if (subjectData.pyq && subjectData.pyq.length > 0) {
    subjectData.pyq.forEach((pyq) => {
      var pyqDiv = createContentDiv(pyq.title, pyq.description, pyq.pdf);
      pyqContainer.appendChild(pyqDiv);
    });
  }

  // Notes tab
  if (subjectData.notes && subjectData.notes.length > 0) {
    subjectData.notes.forEach((note) => {
      var noteDiv = createContentDiv(note.title, note.description, note.pdf);
      notesContainer.appendChild(noteDiv);
    });
  }
}

// Function to update the "Videos" tab
function updateVideos(subjectData) {
  var videosContainer = document.getElementById("videosList");

  // Clear previous videos
  videosContainer.innerHTML = "";

  // Videos tab
  if (subjectData.videos && subjectData.videos.length > 0) {
    subjectData.videos.forEach((video) => {
      var videoDiv = createVideoDiv(
        video.image,
        video.heading,
        video.description,
        video.youtube
      );
      videosContainer.appendChild(videoDiv);
    });
  }
}

function createContentDiv(title, description, link) {
  var contentDiv = document.createElement("div");
  contentDiv.innerHTML = `
      <div class="content-item">
        <h3>${title}</h3>
        <a href="${link}" target="_blank">View PDF</a>
      </div>
    `;
  return contentDiv;
}

function createVideoDiv(image, heading, description, youtubeLink) {
  var videoDiv = document.createElement("div");
  videoDiv.innerHTML = `
      <div class="video-item">
        <img class="video-image" src="${image}" alt="${heading} Image" />
        <div class="video-details">
          <h3>${heading}</h3>
          <p>${description}</p>
          <a href="${youtubeLink}" target="_blank">Watch Video</a>
        </div>
      </div>
    `;
  return videoDiv;
}
