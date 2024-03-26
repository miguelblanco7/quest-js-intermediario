/* PASSO 1 - CRIAR UMA CLASSE PARA TODOS OS IMPUTS
   PASSO 2-  ARRUMAR UM MEIO DE CRIAR UM ARRAY PARA ELES
   PASSO 3- DAR UM JEITO DE VERIFICAR QUAL ESTÁ PREENCHIDO E QUAL NÃO ESTÁ   
   PASSO 4- SE ESTIVER PREENCHIDO, PREENCHER COM UMA BORDA VERDE
   PASSO 5- SE NÃO, ADICIONAR UMA BORDA VERMELHA E UM TEXTO INDICANDO QUE É UM CAMPO OBRIGATÓRIO*/

   const campoFormulario = document.querySelectorAll('.campo');
   const btnEnviar = document.querySelector('.enviar');

   btnEnviar.addEventListener('click' , (e) => {
    e.preventDefault()

    campoFormulario.forEach((input) => {
        if (input.value) {
            input.classList.add('campo-preenchido')
            input.nextElementSibling.classList.remove('mostrar-erro')
        } else{
            input.classList.remove('campo-preenchido')
            input.classList.add('campo-obrigatorio')
            input.nextElementSibling.classList.add('mostrar-erro')
        }
    })
   })