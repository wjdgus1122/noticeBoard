let plusBtn = document.querySelector(".plusBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let noticeWrap = document.querySelector(".noticeWrap");
let popup = document.querySelector(".noticePopupWrap");
let popupClose = document.querySelector(".popupClose");
let popupBtn = document.querySelector(".editBtn");
let conArrow = document.querySelector(".conArrow");
let deletePopupWrap = document.querySelector(".deletePopupWrap");
let deletePopup = document.querySelector(".deletePopup");
const newDate = new Date();
let conArray = [];
let checkArray = [];

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

// deleteBtn.addEventListener("click", () => {
//   deletePopupWrap.style.display = "flex";
//   deletePopup.innerHTML = "";
//   if (conArray.length == 0) {
//     deletePopup.innerHTML = `
//       <h3 class="deletePopupText">삭제할 게시글이 없습니다</h3>
//       <button class="deletePopupBtn">확인</button>
//     `;
//   } else {
//     checkArray.length = 0;
//     deletePopup.innerHTML = `
//       <h3 class="deletePopupTitle">해당 게시글을 삭제하시겠습니까?</h3>
//       <button class="deletePopupBtn">삭제하기</button>
//       <div class="btn deleteCloseBtn">
//           <i class="fa-solid fa-xmark"></i>
//       </div>
//     `;
//     let deletePopupTitle = document.querySelector(".deletePopupTitle");
//     let check = document.querySelectorAll(".checkInput");
//     for (let i = 0; i < check.length; i++) {
//       if (check[i].checked == true) {
//         checkArray.push(check[i].value);
//       }
//     }
//     checkArray.map((con) => {
//       deletePopupTitle.insertAdjacentHTML(
//         "beforeend",
//         `<h3 class="deletePopupText">${con}</h3>`
//       );
//     });
//   }
// });

deletePopup.addEventListener("click", (e) => {
  if (e.target.classList.contains("deletePopupBtn")) {
    deletePopupWrap.style.display = "none";
  }
  if (e.target.classList.contains("fa-xmark")) {
    deletePopupWrap.style.display = "none";
  }
  console.log(e.target);
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
          <label class="checkBox" for="${con.id}">
            <i class="fa-solid fa-check"></i> 
          </label>
          <input type="checkbox" id="${con.id}" value="${con.title}" class="checkInput"/>
          <h3 class="conTitle">${con.title}</h3>
        </div>
        <div class="backSet">
          <h3 class="conDate">${con.date}</h3>
          <div class="conArrow">
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div class="deleteBtn">
             <i class="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
      <div class="contText">${con.text}</div>
    </div>
  `
    );
  });
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
      let checkInput = checkBox.nextElementSibling;
      checkInput.checked == true
        ? (checkBox.style.backgroundColor = "white")
        : (checkBox.style.backgroundColor = "lightgray");
    } else {
      let checkBox = e.target.parentElement;
      let checkInput = checkBox.nextElementSibling;
      checkInput.checked == true
        ? (checkBox.style.backgroundColor = "white")
        : (checkBox.style.backgroundColor = "lightgray");
    }
  }

  if (
    e.target.classList.contains("deleteBtn") ||
    e.target.classList.contains("fa-trash-can")
  ) {
    if (e.target.classList.contains("deleteBtn")) {
      let deleteBtn = e.target;
      let backSet = deleteBtn.parentElement;
      let noticeCont = backSet.parentElement;
      let contWrap = noticeCont.parentElement;
      noticeWrap.removeChild(contWrap);
    } else {
      let deleteBtn = e.target.parentElement;
      let backSet = deleteBtn.parentElement;
      let noticeCont = backSet.parentElement;
      let contWrap = noticeCont.parentElement;
      noticeWrap.removeChild(contWrap);
    }
  }
});
