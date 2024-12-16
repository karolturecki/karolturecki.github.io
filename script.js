setInterval(function () {
    const date = new Date();
    const czas = "Aktualny czas: " + date.getHours() + '-' +  date.getMinutes() +'-'+ date.getSeconds();
    document.getElementById('czas').innerHTML = czas;
} ,1000)``