let plusBtn = document.querySelector(".plusBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let noticeWrap = document.querySelector(".noticeWrap");
let popup = document.querySelector(".noticePopupWrap");
let popupClose = document.querySelector(".popupClose");
let popupBtn = document.querySelector(".editBtn");
let conArrow = document.querySelector(".conArrow");
let deletePopupWrap = document.querySelector(".deletePopupWrap");
let deletePopup = document.querySelector(".deletePopup");
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

deleteBtn.addEventListener("click", () => {
  deletePopupWrap.style.display = "flex";
  deletePopup.innerHTML = "";
  if (conArray.length == 0) {
    deletePopup.innerHTML = `
      <h3 class="deletePopupText">삭제할 게시글이 없습니다</h3>
      <button class="deletePopupBtn">확인</button>
    `;
  } else {
    deletePopup.innerHTML = `
      <h3 class="deletePopupTitle">해당 게시글을 삭제하시겠습니까?</h3>
      <button class="deletePopupBtn">삭제하기</button>
      <div class="btn popupClose">
          <i class="fa-solid fa-xmark"></i>
      </div>
    `;
    let deletePopupTitle = document.querySelector(".deletePopupTitle");
    conArray.map((con) => {
      deletePopupTitle.insertAdjacentHTML(
        "beforeend",
        `<h3 class="deletePopupText">${con.title}</h3>`
      );
    });
  }
});

deletePopup.addEventListener("click", (e) => {
  if (e.target.classList.contains("deletePopupBtn")) {
    deletePopupWrap.style.display = "none";
  }
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
      let checkBox = e.target;
      checkBox.style.backgroundColor == "white"
        ? (checkBox.style.backgroundColor = "lightgray")
        : (checkBox.style.backgroundColor = "white");
    } else {
      let checkBox = e.target.parentElement;
      checkBox.style.backgroundColor == "white"
        ? (checkBox.style.backgroundColor = "lightgray")
        : (checkBox.style.backgroundColor = "white");
    }
  }
});
