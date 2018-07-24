const email = document.getElementById('email'),
      emailBtn = document.getElementById('email-submit'),
      quotes = document.getElementsByClassName('quotes'),
      banWord1 = document.getElementById('ban-word1'),
      banWord2 = document.getElementById('ban-word2'),
      leftButton = document.getElementById('left-button'),
      rightButton = document.getElementById('right-button'),
      galleryPics = document.getElementsByClassName('gallery-pics'),
      miniPics = document.getElementsByClassName('mini-pics');


// BANNER
setTimeout(()=> {
    banWord1.classList.add('slide-right');
    banWord1.classList.remove('seethru')
}, 4000)
setTimeout(()=> {
    banWord2.classList.add('appear');
    banWord2.classList.remove('seethru')
}, 8000)

// TESTIMONIALS
let testimonialCounter = 0;
setInterval(()=> {
    quotes[testimonialCounter].classList.remove('slide-left');
    quotes[testimonialCounter].classList.add('hidden');

    if (++testimonialCounter > quotes.length-1) testimonialCounter = 0;

    quotes[testimonialCounter].classList.remove('hidden');
    quotes[testimonialCounter].classList.add('slide-left');
}, 8000)

// GALLERY PICS
let galleryPicsCounter = 0;
rightButton.addEventListener('click', e => {
    event.preventDefault();

    galleryPics[galleryPicsCounter].classList.remove('show');
    galleryPics[galleryPicsCounter].classList.add('hidden');

    miniPics[galleryPicsCounter].classList.add('opacity-half');

    if (++galleryPicsCounter > galleryPics.length-1) galleryPicsCounter = 0;

    miniPics[galleryPicsCounter].classList.remove('opacity-half');

    galleryPics[galleryPicsCounter].classList.remove('hidden');
    galleryPics[galleryPicsCounter].classList.add('show');

    miniPics[galleryPicsCounter].click();
});

leftButton.addEventListener('click', e => {
    event.preventDefault();

    galleryPics[galleryPicsCounter].classList.remove('show');
    galleryPics[galleryPicsCounter].classList.add('hidden');

    miniPics[galleryPicsCounter].classList.add('opacity-half');

    if (--galleryPicsCounter < 0) galleryPicsCounter = galleryPics.length-1;

    miniPics[galleryPicsCounter].classList.remove('opacity-half');

    galleryPics[galleryPicsCounter].classList.remove('hidden');
    galleryPics[galleryPicsCounter].classList.add('show');
});

// MINI PICS
for (let i = 0; i < miniPics.length; i++) {
    miniPics[i].addEventListener('click', e => {
        galleryPics[galleryPicsCounter].classList.remove('show');
        galleryPics[galleryPicsCounter].classList.add('hidden');

        miniPics[galleryPicsCounter].classList.add('opacity-half');
        miniPics[i].classList.remove('opacity-half');

        galleryPicsCounter = i;
        galleryPics[galleryPicsCounter].classList.remove('hidden');
        galleryPics[galleryPicsCounter].classList.add('show');
    });
}

// FOOTER
emailBtn.addEventListener('click', e => {
    e.preventDefault();
    email.textContent = 'Thank you for subscribing!';
});

// EXPERIMENTAL
// const isInViewport = function (elem,px) {
//     const bounding = elem.getBoundingClientRect();
//     return (
//         bounding.top + (px/2) >= 0 &&
//         bounding.left + (px/2) >= 0 &&
//         bounding.bottom - (px/2) <= (window.innerHeight || document.documentElement.clientHeight) &&
//         bounding.right - (px/2) <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// };

// const hidden = document.getElementsByClassName('hidden');

// window.addEventListener('scroll', e => {
//     for (let i of hidden) {
//         if (isInViewport(i, 800)){ 
//             i.classList.add('show');
//         } else {
//             i.classList.remove('show');
//         }
//     }
// })