let archivo = 'https://jsonplaceholder.typicode.com/users';
document.getElementById('ver').addEventListener('click', () => {
    fetch(archivo)
    .then((rpta) => {
        return rpta.json();
    })
    .then((datos) => {
        console.log(datos);
        let salida = "";
        datos.forEach(usuario => {
            salida += `<p>Nombre: ${usuario.name} - Teléfono: ${usuario.phone} - Email: ${usuario.email}</p>`;
        });
        document.getElementById("resultado").innerHTML = salida;
    })
    .catch((e) => {
        alert(`Error al leer \n${e}`);
    });
});