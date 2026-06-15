document.getElementById('ver').addEventListener('click', () => {
    let mostrar = document.getElementById('seleccion').value;
    let nompais = '';
    let mapa = '';
    switch (mostrar) {
        case '1':
            nompais = 'argentina'
            mapa = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13477636.63915963!2d-64.43395673599497!3d-34.44101180939171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf5f5fdc667%3A0x3d2f77992af00fa8!2sArgentina!5e0!3m2!1ses!2sar!4v1779552382927!5m2!1ses!2sar'
            break;
        case '2':
            nompais = 'peru'
            mapa = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16130082.762667097!2d-75.01950465!3d-9.24353845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c850c05914f5%3A0xf29e011279210648!2zUGVyw7o!5e0!3m2!1ses!2sar!4v1779553960311!5m2!1ses!2sar'
            break;
        case '3':
            nompais = 'chile'
            mapa = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26082176.594387624!2d-88.18039999999999!3d-37.06083245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x505e1131102b91d!2sChile!5e0!3m2!1ses!2sar!4v1779564512064!5m2!1ses!2sar'
            break;
        case '4':
            nompais = 'uruguay'
            mapa = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441113.4986802186!2d-55.78464465!3d-32.6205075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9575073afb5fde09%3A0x4a5596616016524a!2sUruguay!5e0!3m2!1ses!2sar!4v1779564250978!5m2!1ses!2sar'
            break;
        case '5':
            nompais = 'paraguay'
            mapa = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496427.443036335!2d-58.45043874999999!3d-23.447296399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945c083490f13d63%3A0xb3faff611d582ef3!2sParaguay!5e0!3m2!1ses!2sar!4v1779564385884!5m2!1ses!2sar'
            break;       
        default:
            break;
    }
    let archivo = 'https://restcountries.com/v3.1/name/' + nompais;
    fetch(archivo) 
    .then((rpta) => {
        return rpta.json(); 
    })
    .then((datos) => {
        console.log(datos);
        let salida = document.getElementById("resultado");
        salida.innerHTML = '';
        datos.forEach(pais => { 
            let h1 = document.createElement('h1')
            let h2 = document.createElement('h1')
            let h3 = document.createElement('h1')
            let img = document.createElement('img')
            let h4 = document.createElement('h1')
            let iframe = document.createElement('iframe')
            h1.textContent = `Nombre Oficial: ${pais.name.nativeName.spa.official}`
            h2.textContent = `Capital: ${pais.capital}`
            h3.textContent = `Bandera:`
            img.src = `${pais.flags.png}`
            h4.textContent = `Ubicación:`
            iframe.src = `${mapa}`
            salida.appendChild(h1)
            salida.appendChild(h2)
            salida.appendChild(h3)
            salida.appendChild(img)
            salida.appendChild(h4)
            salida.appendChild(iframe)
        });
    })
    .catch((e) => {
        alert(`Error al leer \n${e}`);
    });
});