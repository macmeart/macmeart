window.addEventListener('DOMContentLoaded', () => {
    const pictures = document.querySelectorAll(".picture");
    const picturesObserver = new IntersectionObserver(picturesAppear, {});
    pictures.forEach((pic) => {
        picturesObserver.observe(pic);
    });
    picturesObserver.observe(document.querySelector("#gallery-title span"));
});

function picturesAppear(entries, obs) {
    entries.forEach((ent) => {
        if (ent.isIntersecting) {
            ent.target.classList.add('appear');
        }
        else {
            ent.target.classList.remove('appear');
        }
    });
};


let maiscrollato = true;
window.addEventListener('DOMContentLoaded', () => {

    const freccia = document.querySelector("#freccia");
    let frecciaTimeout = setTimeout(() => {
        if (!maiscrollato) return;
        if (window.location.hash && (window.location.hash != '#intro-page')) return;
        freccia.classList.add('show');
    }, 5000);

    window.addEventListener('keydown', function (event) {

        if (!currentlySelected) return;

        let next;
        if (event.key == 'ArrowLeft') {
            next = currentlySelected.previousSibling;
        }
        else if (event.key == 'ArrowRight') {
            next = currentlySelected.nextSibling;
        }

        if (next) {
            changeMiniImage(next);
        }
    });
});

document.addEventListener('scroll', scrollFreccia);
function scrollFreccia() {
    maiscrollato = false;
    const freccia = document.querySelector("#freccia");
    if (freccia) freccia.classList.remove('show');
    document.removeEventListener('scroll', scrollFreccia);
}


window.addEventListener('hashchange', (event) => {
    if (event.oldURL.endsWith('#dettaglio')) {
        document.querySelector('.picture-modal').classList.remove('appear-modal');
        document.body.classList.remove('appear-modal');
    }
});


let swipex, swipextemp;
let bigPicture;
let miniLangIta, miniLangEng;
window.addEventListener('DOMContentLoaded', () => {

    //cookie,language
    miniLangIta = document.querySelector('.mini-ita');
    miniLangEng = document.querySelector('.mini-eng');
    if (!document.cookie) document.cookie = 'language=english';
    if (document.cookie.endsWith('english')) { changeLanguage('eng'); }
    else {
        changeLanguage('ita');
    }

    bigPicture = document.querySelector(".big-picture");
    const modalPicture = document.querySelector('.picture-modal');
    const modalPictureDescription = document.querySelector('.picture-modal p');
    let galleryPictures = document.querySelectorAll('.gallery .picture-container');
    galleryPictures.forEach((picContainer) => {
        picContainer.addEventListener('click', (ev) => {
            bigPicture.src = ev.target.src;
            modalPicture.classList.add('appear-modal');
            document.body.classList.add('appear-modal');

            window.location.hash = "#dettaglio";

            loadMiniImages();


            //linguaggio selezionato, cookie
            let selectedLanguage;
            if (document.cookie.endsWith('english')) { selectedLanguage = 'descrizioneEnglish'; }
            else {
                selectedLanguage = 'descrizioneItaliano';
            }

            let descrizioneModal = `<span class="titolo">${ev.target.parentElement.dataset.titolo || ''}</span>`;
            descrizioneModal += ev.target.parentElement.dataset[selectedLanguage];
            descrizioneModal += `<span class="anno">${ev.target.parentElement.dataset.anno || ''}</span><span class="dimensioni">${ev.target.parentElement.dataset.dimensioni || ''}</span>`;
            modalPictureDescription.innerHTML = descrizioneModal;

        });
    });

    //swipe functionality of picture modal 

    modalPicture.addEventListener('touchstart', (event) => {
        swipex = event.touches[0].clientX;
    });
    modalPicture.addEventListener('touchmove', (event) => {
        swipextemp = event.touches[event.touches.length - 1]?.clientX;
    });
    modalPicture.addEventListener('touchend', (event) => {
        let keydown = new Event('keydown', { bubbles: true });
        if (swipex - swipextemp < -80) {
            keydown.key = 'ArrowLeft';
            document.dispatchEvent(keydown);
        }
        else
            if (swipextemp && (swipex - swipextemp > 80)) {
                keydown.key = 'ArrowRight';
                document.dispatchEvent(keydown);
            }
        swipex = 0;
        swipextemp = 0;
    });
});

//language, cookie
function changeLanguage(lang) {

    let italiani = document.querySelectorAll('.italiano');
    let inglesi = document.querySelectorAll('.english');

    if (lang == 'eng') {
        document.cookie = 'language=english';
        swapVisibility(inglesi, italiani);

        miniLangEng.classList.add('selected');
        miniLangIta.classList.remove('selected');
    }
    else {
        document.cookie = 'language=italiano';
        swapVisibility(italiani, inglesi);

        miniLangEng.classList.remove('selected');
        miniLangIta.classList.add('selected');
    }

    function swapVisibility(nw, old) {
        nw.forEach((elt) => {
            elt.classList.remove('language-not-selected');
        });
        old.forEach((elt) => {
            elt.classList.add('language-not-selected');
        });


    }

}

let currentlySelected;
let dummyMiniImages = ["./pictures/picture_1.jpg", "./pictures/picture_2.jpg", "./pictures/picture_3.jpg", "./pictures/picture_4.jpg", "./pictures/picture_5.jpeg", "./pictures/picture_6.jpeg"];
function loadMiniImages() {
    let miniImagesSrc = [...dummyMiniImages];
    miniImagesSrc.push(bigPicture.src);
    miniImagesSrc.reverse();

    let container = document.querySelector('.mini-pictures-container');
    container.innerHTML = "";
    miniImagesSrc.forEach((imgSrc, ind) => {
        let img = document.createElement('img');
        img.src = imgSrc;

        if (ind === 0) {
            img.classList.add('selected');
            currentlySelected = img;
        };


        img.addEventListener('click', (event) => { changeMiniImage(event.target, bigPicture); event.stopPropagation(); });
        container.appendChild(img);

    });
}

function changeMiniImage(img) {
    bigPicture.src = img.src;
    img.classList.add('selected');
    if (currentlySelected == img) return;
    currentlySelected.classList.remove('selected');
    currentlySelected = img;
};

