function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

document.getElementById("uks").onclick = function () {
  openModal("ukseModal");
};

document.getElementById("dornseaken").onclick = function () {
  openModal("dornseAknaModal");
};

document.getElementById("dornse").onclick = function () {
  openModal("dornseModal");
};

document.getElementById("kaubaluuk").onclick = function () {
  openModal("luukModal");
};

document.getElementById("etik").onclick = function () {
  openModal("etikModal");
};

document.getElementById("aken").onclick = function () {
  openModal("akenModal");
};

document.getElementById("korsten").onclick = function () {
  openModal("korstenModal");
};

document.getElementById("vahelagi").onclick = function () {
  openModal("lagiModal");
};

document.getElementById("diele").onclick = function () {
  openModal("dieleModal");
};

document.getElementById("fassaad").onclick = function () {
  openModal("fassaadiModal");
};

document.getElementById("krohvlagi").onclick = function () {
  openModal("krohvlaeModal");
};

var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function () {
    var modalId = this.getAttribute("data-modal");
    closeModal(modalId);
  };
}

window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

const tooltip = document.getElementById("tooltip");

function showTooltip(event, text) {
  tooltip.textContent = text; // Set the tooltip text
  tooltip.style.opacity = "1"; // Make it visible
  tooltip.style.left = `${event.pageX + 10}px`; // Position slightly offset from cursor
  tooltip.style.top = `${event.pageY + 10}px`;
}

function hideTooltip() {
  tooltip.style.opacity = "0"; // Hide the tooltip
}

document.addEventListener("DOMContentLoaded", function () {
  // Get references to buttons and pages
  const toPage1Button = document.getElementById("toPage1");
  const toPage2Button = document.getElementById("toPage2");
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");

  // Functions to switch pages
  function showPage1() {
    page1.classList.add("active");
    page2.classList.remove("active");
    localStorage.setItem("currentPage", "page1");
  }

  function showPage2() {
    page2.classList.add("active");
    page1.classList.remove("active");
    localStorage.setItem("currentPage", "page2");
  }

  // Load the last viewed page on page load
  const lastPage = localStorage.getItem("currentPage");
  if (lastPage === "page2") {
    showPage2();
  } else {
    showPage1(); // Default to Page 1
  }

  // Add event listeners to buttons (only if they exist)
  if (toPage1Button) toPage1Button.addEventListener("click", showPage1);
  if (toPage2Button) toPage2Button.addEventListener("click", showPage2);

  // Debugging: Log the last viewed page
  console.log(
    "Last viewed page:",
    localStorage.getItem("currentPage") || "None"
  );
});
