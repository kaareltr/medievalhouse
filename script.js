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

//function etikFunction() {
//  alert(
//    "ETIK\nMaja peasissepääsuni viiv trepp, mille kumbagi külge ehivad nn etikukivid - püstjad kiviplaadid, mille esikülg on kaunistatud omanikku iseloomustavate motiivide v peremärgi vm sümboolikaga.\nmitmed etikud on olnud nii suured, et nende sees - trepi all on olnud võlvitud ruum, mis on olnud eraldi sissepääsuga või ühendatud diele aluse keldriga"
//  );
//}
//function luukFunction() {
//  alert(
//    "KAUBALUUK\nKatuse alusele kaubakorrusele avanev luuk, mille kaudu saab vintsiga üles tõstetud asju laokorrustele ja sealt ära. Kaubaluugud on reeglina suhteliselt lihtsa ja kogu linna lõikes ka suhteliselt sarnase kujuga. Luugiavade küljed on reeglina faasitud ja siledaks tahutud paeplokkidest. Ava kaarjas sillus samamoodi viimistletud."
//  );
//}
// function portaalFunction() {
//  alert(
//    "PORTAAL\nHoone peasissepääs, mis on sageli vormistatud väga esindusliku raidkiviteosena. Sageli on see ainuke või üks väheseid elemente, mis on vormistatud teravkaarsena. Mitmetel portaalidel on töödeldud kivipinnad viimistletud mitmevärvilisena. Portaalide dateerimisel lähtutakse kindlalt dateeritavatest ja tuntud eeskujudest, nagu kirikud vm avalikud hooned."
//  );
//}
//function akenFunction() {
//  alert(
//    "AKEN\nMaja tänavapoolsel küljel sissepääsu kõrval paiknevad aknad on sageli väga suured - paeraamistusega liigendatud kõrged aknad valgustasid kõrget diele ruumi. Aknadetaile võib sageli leida taaskasutatud materjlina müüridest ning need on äratuntavad puidust aknaraami jaoks mõeldud valtsi ning trelliaukude järgi."
//  );
//}
//function korstenFunction() {
//  alert(
//    "MANTELKORSTEN\nMaja küttesüsteemi põhiline ja suurim osa - avar mantelkorsten, mille all paikes köök. Mantelkorsten asus diele nurgas ning selle toapoolne nurk toetus reeglina paekivist sambale."
//  );
//}
//function lagiFunction() {
//  alert(
//    "VAHELAGI\nkeldri ja eluruumide vaj´heline lagi oli tüüpiliselt mitmekihilise konstruktsiooniga. Talad toetusid seinas olevatele kivikonsoolidele ning talade peale oli kiht murtud pinnaga paeplaate. selle peal kiht kasetohtu ning selle peal sambla ja liiva kihid. Selline laekonstruktsioon tagas muuhulgas ka teatava tulekindluse."
//  );
//}
//function dornseakenFunction() {
//  alert(
//    "DORNSE AKEN\nPrivaatsema eluruumi, ehk dornse aken oli ruumi suurust arvestades samuti suhteliselt suur ning sageli väga esinduslikult vormistatud ja kujundatud. akende vahelised müüriosad olid kaunistatud sammastega, mis kandsid ajastule omaseid stiilitunnuseid - on näiteid gootikast barokini."
//  );
//}
//function dieleFunction() {
//  alert(
//    "DIELE\nMaja peamine elu- ja tööruum, mille nurgas oli mantelkorstna alune köök. hilisematel sajanditel muutus see esindusruumiks, kus asus ülemistele korrustele viiv paraadse ilmega trepp."
//  );
//}
//function dornseFunction() {
//  alert(
//    "DORNSE\nMaja peakorruse ruumidest privaatsem. See oli ainuke kerishüpokaustiga köetav ruum. Osades hoonetes oli selle ruumi kaugu ainus sissepääs selle all olevasse keldriruumi."
//  );
//}

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

// Get references to buttons and pages
const toPage1Button = document.getElementById("toPage1");
const toPage2Button = document.getElementById("toPage2");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

// Function to show Page 1 and hide Page 2
function showPage1() {
  page1.classList.add("active");
  page2.classList.remove("active");
}

// Function to show Page 2 and hide Page 1
function showPage2() {
  page2.classList.add("active");
  page1.classList.remove("active");
}

// Add event listeners to buttons
toPage1Button.addEventListener("click", showPage1);
toPage2Button.addEventListener("click", showPage2);

// Initialize: Show Page 1 by default
showPage1();

// Save the last viewed page in localStorage
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
