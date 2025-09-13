import { getDigimones } from "./getDigimones.js";

const mostrarDigimones = async () => {
    try {
        const digimones = await getDigimones();
        
        console.log('Datos crudos:', digimones);
        
        // Verifica primero que digimones sea un array
        if (!Array.isArray(digimones)) {
            console.error('La respuesta no es un array:', digimones);
            return;
        }
        
        // Usar map para transformar los datos
        const digimonesInfo = digimones.map(digimon => ({
            nombre: digimon.name,
            nivel: digimon.level || 'Desconocido',
            imagen: digimon.image?.[0]?.href || 'sin-imagen'
        }));
        
        console.log('Digimones transformados:', digimonesInfo);
        
        // Crear HTML
        const digimonesHTML = digimones.map(digimon => {
    return `    
            <div class="digimon">
                <h3>${digimon.name}</h3>
                <img src="${digimon.image?.[0]?.href || ''}" alt="${digimon.name}" width="100">
                <p>Nivel: ${digimon.level || 'Desconocido'}</p>
            </div>
        `}).join('');
        document.body.innerHTML = digimonesHTML;
        
    } catch (error) {
        console.error('Error:', error);
    }
}


mostrarDigimones();


// fetch('https://digi-api.com/api/v1/digimon')
//     .then( (response) => {
//         if (!response.ok) { // Si la respuesta no es correcta
//             throw new Error(`Error HTTP: ${response.status}`);
//         }
//         return response.json(); // Parsear la respuesta como JSON
//     })
//     .then(data => {
//         console.log(data.content); // Aquí tienes los datos de los digimones
//     })
//     .catch(error => {
//         console.error('Error al obtener los digimones:', error);
//     });     


//getDigimones();