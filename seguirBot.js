const quantidadeSeguir = 30; // Vai seguir 30 pessoas
let segundosAtraso =  5; // 5 Segundos de Atraso 
let divisaoAtraso = segundosAtraso / 100;
let atraso = divisaoAtraso;

(() => {
    let i = 0;
    const intervaloparaSeguir = setInterval(() => {
        if (i >= quantidadeSeguir) {
            clearInterval(intervaloparaSeguir);
            return;
        }
        const botoes = document.querySelectorAll('button');
        const proximoBotao = botoes[i];
        proximoBotao.click();
        i += 1;
    }, atraso)
})()