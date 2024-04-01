const $name = document.getElementById('name');
const $date = document.getElementById('fecha');
const $number = document.getElementById('ci');
const $text = document.getElementById('dir');
const $mix = document.getElementById('chapa');


document.addEventListener('DOMContentLoaded', () => {
    $name.innerHTML = `Nombre: ${localStorage.getItem('nombre')}`;
    $date.innerHTML = `Fecha de la reservación: ${localStorage.getItem('fecha')}`;
    $number.innerHTML = `CI o Número de cliente: ${localStorage.getItem('ci')}`;
    $text.innerHTML = `Dirección: ${localStorage.getItem('dir')}`;
    $mix.innerHTML = `Chapa del Vehículo: ${localStorage.getItem('chapa')}`;    
})