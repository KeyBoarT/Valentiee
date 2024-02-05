//#region splash
setTimeout(() => {
    document.getElementById('Splash').classList.toggle('fade');
}, 2000);
//#endregion splash


//#region qna
qnaButtons = document.getElementsByClassName('qna-btn');

for(let i = 0, len = qnaButtons.length; i < len; i++) {
    qnaButtons[i].addEventListener('click', () => {
        qnaButtons[i].parentNode.parentNode.classList.toggle('active');
    })
}
//#endregion qna

//#region back-to-top
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

backTopBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

window.addEventListener("scroll", activeElementOnScroll);

//#endregion back-to-top