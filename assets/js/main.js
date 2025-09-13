import { getDigimones } from "./getDigimones.js";


getDigimones();



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