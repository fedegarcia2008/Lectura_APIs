let archivo = 'https://dog.ceo/api/breeds/image/random/8';
document.getElementById('ver').addEventListener('click', () => {
    fetch(archivo)
    .then((rpta) => {
        return rpta.json();
    })
    .then((datos) => {
        console.log(datos);
        let salida = document.getElementById("resultado");
        salida.innerHTML = '';
        datos.message.forEach(perro => {
            let img = document.createElement('img');
            img.src = perro;
            salida.appendChild(img);
        });
    })
    .catch((e) => {
        alert(`Error al leer \n${e}`);
    });
});