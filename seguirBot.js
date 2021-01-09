(() => {
    let i = 0;
    const intervaloparaSeguir = setInterval(() => {
        if (i >= 30) {
            clearInterval(intervaloparaSeguir);
            return;
        }
        const botoes = document.querySelectorAll('button');
        const proximoBotao = botoes[i];
        proximoBotao.click();
        i += 1;
    }, 500)
})()