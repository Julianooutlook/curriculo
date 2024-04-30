var slideshows = document.querySelectorAll( ' [data-component="slideshow"] ');

// Aplica a todas as apresentações de slides que voçê  define com html escrito 
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
    // Obter um array de slide
    var slides = document.querySelectorAll(` #${slideshow.id} [role="list"] .slide`); 

    var index = 0, time = 2000;
    slides[index].classList.add('active');

    setInterval( () => {
        slides[index].classList.remove('active');

        // Passar por cada slides, incrementando o indice 
        index++;

        // Ao passar por todos os slides, reiniciar o índice para exibir o primeiro slide e iniciar novamente 
        if (index === slides.length) index = 0;

        slides[index].classList.add('active');
    }, time);
}