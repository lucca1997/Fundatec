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
    if(nome == null || nome ==""){
        alert('Preencha Seu Nome');
        return false;
    }
    if(email == null || email ==""){
        alert('Preencha Seu Email');
        return false;
    }
    if(senha == null || senha ==""){
        alert('Preencha Sua Senha');
        return false;
    }
    if(repeat == null || repeat ==""){
        alert('Repita Sua Senha');
        return false;
    }
    if(senha != repeat){
        alert('As Senhas Devem ser Iguais');
        return false;
    }
    alert('Obrigado por se Cadastrar no Nosso Site');
    return true;
}