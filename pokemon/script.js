var pulsaciones = 0;
var carta1 = '';
var carta2 = '';

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll(".carta").forEach(element => {
        element.addEventListener('click', function(){
            if(!element.classList.contains('seleccionada')){
                element.classList.toggle('seleccionada');
                pulsaciones++;
                if(pulsaciones==1){
                    carta1 = element.classList[1];
                }else if(pulsaciones==2){
                    carta2 = element.classList[1];
                    pulsaciones=0;
                    if(carta1 != carta2){
                        setTimeout(quitarClaseSeleccionada, 700);
                    };
                };
            };
        });
    });
});

function quitarClaseSeleccionada(){
    document.querySelectorAll("." + carta1).forEach(element => {
        element.classList.remove('seleccionada');
    });
    document.querySelectorAll("." + carta2).forEach(element => {
        element.classList.remove('seleccionada');
    });
}