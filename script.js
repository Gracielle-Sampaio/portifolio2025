let cliques = 0;
const mudarmodo = document.getElementById("mudarmodo");
const body = document.body;
const botoesConteudo = document.querySelectorAll('.botao-cont');
const divsConteudo = document.querySelectorAll('.conteudo');


mudarmodo.addEventListener('click', function(){
    cliques++;
    body.classList.remove('modoclaro', 'modoescuro', 'modored')
    switch (cliques % 4){
        case 1:
            body.classList.toggle('modoclaro');
            break
        case 2:
            body.classList.toggle('modoescuro');
            break
        case 3:
            body.classList.toggle('modored');
            break
        case 0:
            body.classList.toggle('modoclaro');
            break
    }

    if (cliques >=3){
        cliques=0
    }
})


botoesConteudo.forEach(botao => {
    botao.addEventListener('click', function(event) {
        event.preventDefault(); 

        botoesConteudo.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const targetDivId = this.dataset.tab;

        divsConteudo.forEach(div => {
            if (div.id === targetDivId) {
                div.style.display = 'flex'; 
            } else {
                div.style.display = 'none'; 
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const botaoSobre = document.querySelector('.botao-cont[data-tab="cont1"]');
    if (botaoSobre) {
        botaoSobre.classList.add('active');
    }

    divsConteudo.forEach(div => {
        if (div.id === 'cont1') {
            div.style.display = 'flex';
        } else {
            div.style.display = 'none';
        }
    });
});