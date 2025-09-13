

export const getDigimones = async () => {
    try {
            const url = 'https://digi-api.com/api/v1/digimon';
            const resp = await fetch(url);
        
            if (!resp.ok) {
                throw new Error(`Error HTTP: ${resp.status}`);
            }
        
            const data = await resp.json();
            console.log(data.content);
            return data.content;
    } catch (error) {
        console.error('Error al obtener los digimones:', error);
        throw error; // O puedes retornar un array vacío: return [];
    }
}