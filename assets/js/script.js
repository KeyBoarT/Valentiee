setTimeout(() => {
    document.getElementById('Splash').classList.toggle('fade');
}, 2000);

qnaButtons = document.getElementsByClassName('qna-btn');

for(let i = 0, len = qnaButtons.length; i < len; i++) {
    qnaButtons[i].addEventListener('click', () => {
        qnaButtons[i].parentNode.parentNode.classList.toggle('active');
    })
}