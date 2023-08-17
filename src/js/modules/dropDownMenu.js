export default function initDropMenu() {
  const dropdownContent = document.getElementById("myDropdown");
  const dropdownImg = document.querySelector(".dropdown-img");

  if (dropdownContent.classList.contains("show")) {
    dropdownContent.classList.remove("show");
    dropdownImg.classList.remove("vsgtransform");
    dropdownImg.classList.add("reversevsg");
  } else {
    dropdownContent.classList.add("show");
    dropdownImg.classList.add("vsgtransform");
    dropdownImg.classList.remove("reversevsg");
  }

  window.onclick = function (event) {
    if (
      !event.target.matches(".dropbtn") &&
      !event.target.matches(".dropbtn img")
    ) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
          dropdownImg.classList.remove("vsgtransform");
        }
      }
    }
  };
}
