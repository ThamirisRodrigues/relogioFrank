const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const milesimos = document.getElementById('milesimos');


const relogio = setInterval(function time() {
    let dateToday = new Date();
    let day = dateToday.getDate();
    let mol = dateToday.getMonth() + 1;
    let ey = dateToday.getFullYear();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let mill = dateToday.getMilliseconds();
   
    if (ey < 10) ey = '0' + ey;

    if (mol < 10) mol = '0' + mol;
    
    if (day < 10) day = '0' + day;

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    if (mill < 10) mill = '0' + mill;

    dia.textContent = day;
    mes.textContent = mol;
    ano.textContent = ey;
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    milesimos.textContent = mill;

})