setInterval(function () {
    const date = new Date();
    const czas = "Aktualny czas: " + date.getHours() + 'h-' +  date.getMinutes() +'m-'+ date.getSeconds() + "s";
    document.getElementById('czas').innerHTML = czas;
} ,1000)