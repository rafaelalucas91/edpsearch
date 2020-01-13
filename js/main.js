window.addEventListener("load", event => {

    // Variables
    const container = document.querySelector('.container'),
        inputSearch = document.querySelector('.inputSearch'),
        input = document.querySelector('input'),
        voiceSearch = document.querySelector('.voiceSearch'),
        searchTitle = document.querySelector('.searchTitle'),
        teste = document.querySelector('.teste'),
        loadingSearch = document.querySelector('.loadingSearch');

    // Events
    inputSearch.addEventListener('click', showInput);
    voiceSearch.addEventListener('click', hideInput);
    teste.addEventListener('click', loadSearch);

    // To show Search Input
    function showInput() {
        if (!container.classList.contains('showInput')) {
            container.classList.add('showInput');
            voiceSearch.classList.remove('animeVoice');
            input.disabled = false;

            searchTitle.style.opacity = "0";
            searchTitle.style.transform = "translateX(-20px)";
            setTimeout(() => {
                searchTitle.style.opacity = "1";
                searchTitle.style.transform = "translateX(0px)";
                searchTitle.innerText = "O que procura?";
            }, 400);
        }
    }
    // To hide the Search Input and show the Voice Search
    function hideInput() {

        if (container.classList.contains('showInput')) {
            container.classList.remove('showInput');

            searchTitle.style.opacity = "0";
            searchTitle.style.transform = "translateX(-20px)";

            setTimeout(() => {
                searchTitle.style.opacity = "1";
                searchTitle.style.transform = "translateX(0px)";
                searchTitle.innerText = "Fale agora";
            }, 500);

            setTimeout(() => {
                voiceSearch.classList.add('animeVoice');
            }, 1200);
        }
    }

    function loadSearch() {
        voiceSearch.classList.remove('animeVoice');

        searchTitle.style.opacity = "0";
        searchTitle.style.transform = "translateX(-20px)";

        setTimeout(() => {
            loadingSearch.style.display = "block";
        }, 400);
    }
});