const $formulario = document.getElementById('form');
const $nombre = document.getElementById('name');
const $fecha = document.getElementById('date');
const $ci = document.getElementById('number');
const $dir = document.getElementById('dir');
const $chapa = document.getElementById('mix');


$formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isNotFilledValue($nombre.value) || isNotFilledValue($chapa.value) || isNotFilledValue($fecha.value) || isNotFilledValue($dir.value)) {
        window.alert('Debe rellenar los datos para continuar');
        return;
    }

    localStorage.setItem('nombre', $nombre.value);
    localStorage.setItem('fecha', $fecha.value);
    localStorage.setItem('ci', $ci.value);
    localStorage.setItem('dir', $dir.value);
    localStorage.setItem('chapa', $chapa.value); 

    window.alert('Su reservacion ha sido realizada con exito');
    window.location = "index.html"
}) 


function isNotFilledValue(value) {
    return value === '';
}