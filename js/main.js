window.addEventListener("load", event => {

    const container = document.querySelector('.container'),
        inputSearch = document.querySelector('.inputSearch'),
        input = document.querySelector('input'),
        voiceSearch = document.querySelector('.voiceSearch'),
        searchTitle = document.querySelector('.searchTitle');


    inputSearch.addEventListener('click', showInput);
    voiceSearch.addEventListener('click', hideInput);

    // To show Search Input
    function showInput() {
        if (!container.classList.contains('showInput')) {
            container.classList.add('showInput');
            input.disabled = false;

            searchTitle.style.opacity = "0";
            setTimeout(() => {
                searchTitle.style.opacity = "1";
                searchTitle.innerText = "O que procura?";
            }, 400);
        }
    }
    // To hide the Search Input and show the Voice Search
    function hideInput() {

        if (container.classList.contains('showInput')) {
            container.classList.remove('showInput');

            searchTitle.style.opacity = "0";

            setTimeout(() => {
                searchTitle.style.opacity = "1";
                searchTitle.innerText = "Fale agora";
            }, 400);
        }



    }



});