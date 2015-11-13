$(function () {
    var X = true,
        fim = false;

    var jX = {
        b11: false,
        b12: false,
        b13: false,
        b21: false,
        b22: false,
        b23: false,
        b31: false,
        b32: false,
        b33: false
    };
    var jO = {
        b11: false,
        b12: false,
        b13: false,
        b21: false,
        b22: false,
        b23: false,
        b31: false,
        b32: false,
        b33: false
    };

    $(".btn").click(function () {
        var btn = $(this);
        if (fim) {
            alert("Jogo ja Finalizado,\nRecarregue pra reiniciar");
            return;
        }
        if (!btn.hasClass("btn-primary")) {
            alert("Ja Jogado");
            return;
        }
        if (X) {
            btn.text("X");
            btn.removeClass("btn-primary");
            btn.removeClass("btn-danger");
            btn.addClass("btn-success");
            jX[btn.attr("id")] = true;
            if (verifica(jX)) {
                fim = true;
                alert("X Ganhou");
            }
        } else {
            btn.text("O");
            btn.removeClass("btn-primary");
            btn.removeClass("btn-success");
            btn.addClass("btn-danger");
            jO[btn.attr("id")] = true;
            if (verifica(jO)) {
                fim = true;
                alert("O Ganhou");
            }
        }
        X = !X;

    });
});


function verifica(j) {
    if (j.b11 && j.b12 && j.b13) {
        return true;
    }
    if (j.b21 && j.b22 && j.b23) {
        return true;
    }
    if (j.b31 && j.b32 && j.b33) {
        return true;
    }
    if (j.b11 && j.b21 && j.b31) {
        return true;
    }
    if (j.b12 && j.b22 && j.b32) {
        return true;
    }
    if (j.b13 && j.b23 && j.b33) {
        return true;
    }
    if (j.b11 && j.b22 && j.b33) {
        return true;
    }
    if (j.b31 && j.b22 && j.b13) {
        return true;
    }
    return false;
}