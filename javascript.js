window.addEventListener('load', function() {
    verificarResposta();
    aumentarDiminuirFonte()
})

function verificarResposta() {
    var alternativas = document.querySelectorAll('button.option')

    alternativas.forEach(a => {
        a.addEventListener('click', function() {

            // restaurar a cor original dos botões
            // alternativas.forEach(x => {
            //     x.style.backgroundColor = 'cadetblue'
            // })

            var alternativaCorreta = a.dataset.correto;
            console.log(alternativaCorreta);

            if (alternativaCorreta == 'true') {
                // alert('Acertou!!!')
                a.style.backgroundColor = 'green'
            } else {
                // alert('Errou!!!')
                a.style.backgroundColor = 'red'
            }

            alternativas.forEach(x => {
                x.setAttribute('disabled', true)
            })

            document.querySelector('a.next').classList.remove('disabled')

        })

    });
}

function aumentarDiminuirFonte() {
    var elementBody = document.querySelector('body');
    var elementBtnIncreaseFont = document.getElementById('increase-font');
    var elementBtnDecreaseFont = document.getElementById('decrease-font');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 10;

    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });

    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
}
