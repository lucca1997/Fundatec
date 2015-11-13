//var helloWord = 'Hello, World';
//helloWord = helloWord*10;
//var x = 0;
//var y = '0';
//var z = 1;
//y=(x===0)?1:2;
//y=(x===2)?1:(x===0)?0:2;
//alert(y)
//alert(helloWord);
function horas() {
    document.getElementById('demo').innerHTML = Date();
}

function titulo() {
    document.getElementById('titulo').innerHTML = 'Veja a Data e Hora atual';
}

function validarFormulario() {
    var form = document.forms['cadastroForm'];
    var nome = form['nome'].value;
    var email = form['email'].value;
    var senha = form['senha'].value;
    var repeat = form['repeat'].value;

    if (validaCampo(nome, 'Preencha seu Nome') &&
        validaCampo(email, 'Preencha seu Email') &&
        validaCampo(senha, 'Preencha sua Senha') &&
        validaCampo(repeat, 'Repita sua Senha') && 
       confereSenhas(senha, repeat)) {
        alert('Obrigado por se Cadastrar no Nosso Site');
        return true;
    }
    return false;
}

function validaCampo(campo, mensagem) {
    if (campo == null || campo == "") {
        alert(mensagem);
        return false;
    }
    return true;
}

function confereSenhas(senha1, senha2){
    if (senha1 != senha2){
         alert('As Senhas Devem ser Iguais');
         return false;
    }
     return true;
}