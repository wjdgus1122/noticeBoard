let plusBtn = document.querySelector(".plusBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let noticeWrap = document.querySelector(".noticeWrap");
let popup = document.querySelector(".noticePopupWrap");
let popupClose = document.querySelector(".popupClose");
let popupBtn = document.querySelector(".editBtn");
let conArrow = document.querySelector(".conArrow");

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
  document.getElementById("textInput").value = null;
  document.getElementById("dateInput").value = null;
  document.getElementById("textArea").value = null;
  popup.style.display = "none";
  arrayMap();
});

const arrayMap = () => {
  noticeWrap.innerHTML = "";
  conArray.map((con) => {
    noticeWrap.insertAdjacentHTML(
      "beforeend",
      `
    <div class="contWrap">
      <div class="noticeCont">
        <div class="frontSet">
          <div class="checkBox">
            <i class="fa-solid fa-check"></i>
          </div>
          <h3 class="conTitle">${con.title}</h3>
        </div>
        <div class="backSet">
          <h3 class="conDate">${con.date}</h3>
          <div class="conArrow">
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
      </div>
      <div class="contText">${con.text}</div>
    </div>
  `
    );
  });
  console.log(conArray);
};

arrayMap();

noticeWrap.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-angle-down")) {
    let conArrow = e.target.parentElement;
    let backSet = conArrow.parentElement;
    let noticeCont = backSet.parentElement;
    let contText = noticeCont.nextElementSibling;
    contText.style.display == "none"
      ? (contText.style.display = "flex")
      : (contText.style.display = "none");
  }

  if (
    e.target.classList.contains("checkBox") ||
    e.target.classList.contains("fa-check")
  ) {
    if (e.target.classList.contains("checkBox")) {
      console.log("check1");
      let checkBox = e.target;
      checkBox.style.backgroundColor == "white"
        ? (checkBox.style.backgroundColor = "lightgray")
        : (checkBox.style.backgroundColor = "white");
      console.log(checkBox);
    } else {
      console.log("check2");
      let checkBox = e.target.parentElement;
      checkBox.style.backgroundColor == "white"
        ? (checkBox.style.backgroundColor = "lightgray")
        : (checkBox.style.backgroundColor = "white");
      console.log(checkBox);
    }
  }
});
