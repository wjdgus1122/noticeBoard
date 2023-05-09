let plusBtn = document.querySelector(".plusBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let noticeWrap = document.querySelector(".noticeWrap");
let popup = document.querySelector(".noticePopupWrap");
let popupClose = document.querySelector(".popupClose");

plusBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

popupClose.addEventListener("click", () => {
  document.getElementById("textInput").value = null;
  document.getElementById("dateInput").value = null;
  document.getElementById("textArea").value = null;
  popup.style.display = "none";
});
