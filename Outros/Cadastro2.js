$(document).ready(function () {
    $('form').submit(function (event) {
        var valido = true;
        $('.required').each(function (input) {
            var campo = $(this);
            var valor = campo.val();
            if (validaCampo(valor)) {
                campo.removeClass("error");
            } else {
                campo.addClass("error");
                valido = false;
            }
        });
        var senha1 = $('input[name="senha"]').val();
        var senha2 = $('input[name="repeat"]').val();
        if (valido) {
            if (!confereSenhas(senha1, senha2)) {
                alert('As Senhas Devem ser Iguais');
                e.preventDefault();
            }
        } else {
            alert('Campos Obrigatorios não foram preenchidos');
            e.preventDefault();
        }
    });
});

function validaCampo(campo) {
    if (campo == null || campo == "") {
        return false;
    }
    return true;
}

function confereSenhas(senha1, senha2) {
    if (senha1 != senha2) {
        return false;
    }
    return true;
}