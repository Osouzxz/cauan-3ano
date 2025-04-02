document.addEventListener('DOMContentLoaded',function(){

    const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade');  
    const opcoesDeacessibilidade=document.getElementById('opcoes-acessibilidade'); 

    botaoDeAcessibilidade.addEventListener('click',function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao')
        opcoesDeacessibilidade=document.classList.toggle('apresenta-lista');

        const botaoSelecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')=== 'true'

    })




    })