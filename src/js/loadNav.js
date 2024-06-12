document.addEventListener('DOMContentLoaded', () => {
    fetch('/views/nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el contenido del nav:', error));
});
