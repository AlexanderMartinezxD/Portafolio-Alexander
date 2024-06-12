document.addEventListener('DOMContentLoaded', () => {
    fetch('/views/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el contenido del footer:', error));
});
