window.addEventListener('scroll', function() {
    const banner = document.querySelector('.banner');
    let offset = window.pageYOffset;
    banner.style.backgroundPosition = `50% calc(20% + ${offset * 0.7}px)`;
    });


    const backgroundElement = document.querySelector("#background");
    const formElement = document.querySelector("form");
    function abrir() {
        formElement.style.opacity = "1";
        formElement.style.pointerEvents = "auto";
        backgroundElement.style.opacity = '0.2';
    }

    function fechar() {
        formElement.style.opacity = "0";
        formElement.style.pointerEvents = "none";
        backgroundElement.style.opacity = '1';
    }