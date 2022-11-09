window.addEventListener('DOMContentLoaded', () => {
    const pictures = document.querySelectorAll(".picture");
    const picturesObserver = new IntersectionObserver(picturesAppear, {});
    pictures.forEach((pic) => {
        picturesObserver.observe(pic);
    });
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
        if (window.location.hash) return;  
        freccia.classList.add('show');
    }, 5000);
});

document.addEventListener('scroll', scrollFreccia);
function scrollFreccia() {
    maiscrollato = false;
    const freccia = document.querySelector("#freccia");
    if (freccia) freccia.classList.remove('show');
    document.removeEventListener('scroll', scrollFreccia);
}