document.addEventListener('DOMContentLoaded',function(){

    const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade');  
    const opcoesDeacessibilidade=document.getElementById('opcoes-acessibilidade'); 

    botaoDeAcessibilidade.addEventListener('click',function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao')
        opcoesDeacessibilidade=document.classList.toggle('apresenta-lista');

        const botaoSelecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')=== 'true'

        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
   
    })
 
   
     const aumentaFonteBotao = document.getElementById('aumentar-fonte');
     const diminuiFonteBotao = document.getElementById('diminuir-fonte');
     
     const alternaContraste = document.getElementById('alterna-contraste')

    let tamanhoAtualdaFonte = 1;

    aumentaFonteBotao.addEventListener('click', Function(){
        tamanhoAtualdaFonte += 0.1;
        document.body.style.fontSize= '${tamanhoAtualdaFonte}rem'



    })


    })