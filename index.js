let plusBtn = document.querySelector(".plusBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let noticeWrap = document.querySelector(".noticeWrap");
let popup = document.querySelector(".noticePopupWrap");
let popupClose = document.querySelector(".popupClose");
let popupBtn = document.querySelector(".editBtn");
let conArray = [];

plusBtn.addEventListener("click", () => (popup.style.display = "flex"));

popupClose.addEventListener("click", () => {
  document.getElementById("textInput").value = null;
  document.getElementById("dateInput").value = null;
  document.getElementById("textArea").value = null;
  popup.style.display = "none";
});

popupBtn.addEventListener("click", function (e) {
  conArray.push({
    id: conArray.length,
    title: document.getElementById("textInput").value,
    date: document.getElementById("dateInput").value,
    text: document.getElementById("textArea").value,
  });
});

const arrayMap = () => {
  conArray.map(() => {
    let a = document.createElement;
  });
};
