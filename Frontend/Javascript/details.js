document.getElementById("openSideBar").onclick = function() {
    document.getElementById("sideBar").style.right = "0"; // Show sidebar
};

document.getElementById("closeSideBar").onclick = function() {
    document.getElementById("sideBar").style.right = "1900px"; // Hide sidebar
};