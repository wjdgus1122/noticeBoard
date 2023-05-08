let plusBtn = document.querySelector(".plusBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let noticeWrap = document.querySelector(".noticeWrap");
let popup = document.querySelector(".noticePopupWrap");
let popupClose = document.querySelector(".popupClose");

plusBtn.addEventListener("click", () => (popup.style.display = "flex"));

popupClose.addEventListener("click", () => (popup.style.display = "none"));
