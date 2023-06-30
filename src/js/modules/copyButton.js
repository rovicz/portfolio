export default function initCopyButton() {
  const mail = "contact@victorferreira.dev";
  const button = document.getElementById("copy-button");

  function copyButton() {
    navigator.clipboard.writeText(mail);
    alert("The email has been copied.");
  }

  button.addEventListener("click", copyButton);
}
