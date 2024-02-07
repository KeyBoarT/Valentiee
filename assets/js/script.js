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

//#region top-collections
const imgWrappers = document.getElementsByClassName('img-wrapper');

for(let i = 0, len = imgWrappers.length; i < len; i++) {
  imgWrappers[i].addEventListener('click', () => {
    imgWrappers[i].children[1].classList.toggle('active');
  });
}
//#endregion top-colllections

//#region dark-mode
const modeSwitchBtn = document.querySelector('[mode-switch]');
modeSwitchBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  modeSwitchBtn.classList.toggle('active');
});
//#endregion dark-mode

//#region privacy
const btnPrivacyOpen = document.querySelector('[data-privacy-open]');
const btnPrivacyClose = document.querySelector('[data-privacy-close]');
const sectionPrivacy = document.querySelector('[data-privacy]');


function privacyOpen() {
    sectionPrivacy.style.display = 'block';
}

function privacyClose() {
    sectionPrivacy.style.display = 'none';
}
btnPrivacyOpen.addEventListener('click', privacyOpen);
btnPrivacyClose.addEventListener('click', privacyClose);
//#endregion privacy

//#region menu
const btnMenu = document.querySelector('[data-menu]');
const navbar = document.querySelector('[data-navbar]');

btnMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
  btnMenu.classList.toggle('active');
});
//#endregion menu

//#region window-resize
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    navbar.classList.add('active');
  }
});
//#endregion window-resize
