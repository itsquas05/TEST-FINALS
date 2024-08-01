document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing');
    const texts = ["Gamer", "Video Editor", "Guitarist", "Singer"];
    let index = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < texts[index].length) {
            typingElement.textContent += texts[index][charIndex];
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(() => {
                typingElement.textContent = '';
                charIndex = 0;
                index = (index + 1) % texts.length;
                type();
            }, 1000);
        }
    }

    type();
    const typingElement2 = document.querySelector('.typing-2');
    const texts2 = ["Gamer", "Video Editor", "Guitarist", "Singer"];
    let index2 = 0;
    let charIndex2 = 0;

    function type2() {
        if (charIndex2 < texts2[index2].length) {
            typingElement2.textContent += texts2[index2][charIndex2];
            charIndex2++;
            setTimeout(type2, 100);
        } else {
            setTimeout(() => {
                typingElement2.textContent = '';
                charIndex2 = 0;
                index2 = (index2 + 1) % texts2.length;
                type2();
            }, 1000);
        }
    }
    type2();
});
function toggleMenu() {
    const navList = document.querySelector('.menu');
    navList.classList.toggle('show');
  }

  document.querySelectorAll('.faq .question h3').forEach((question) => {
    question.addEventListener('click', () => {
        const parent = question.parentElement;
        parent.classList.toggle('open');
    });
});