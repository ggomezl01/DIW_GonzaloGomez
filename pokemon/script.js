var pulsaciones = 0;
var carta1 = '';
var carta2 = '';
var bloqueado = false;

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll(".carta").forEach(element => {
        element.addEventListener('click', function () {
            if (bloqueado || element.classList.contains('seleccionada')) {
                return;
            }

            element.classList.toggle('seleccionada');
            pulsaciones++;

            if (pulsaciones === 1) {
                carta1 = element;
            } else if (pulsaciones === 2) {
                carta2 = element;
                bloqueado = true;

                if (carta1.classList[1] !== carta2.classList[1]) {
                    setTimeout(quitarClaseSeleccionada, 700);
                } else {
                    carta1.classList.toggle('correcta');
                    carta2.classList.toggle('correcta');
                    bloqueado = false;

                    if(comprobarFinal()){
                        const confetti = document.getElementById("confetti");
                        confetti.removeAttribute("hidden");
                    }
                }
                pulsaciones = 0;
            }
        });
    });
});

function quitarClaseSeleccionada() {
    document.querySelectorAll(".seleccionada").forEach(element => {
        if(!element.classList.contains('correcta')){
            element.classList.remove('seleccionada');
        }
    });
    bloqueado = false;
}

function comprobarFinal() {
    return document.querySelectorAll(".carta.correcta").length === document.querySelectorAll(".carta").length;
}