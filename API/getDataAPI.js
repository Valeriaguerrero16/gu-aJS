import url from "./apiUrl.js";

async function getData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }

        const dataJson = await response.json();
        return dataJson;
    } catch (error) {
        console.error("Error al obtener los datos:", error.message);
        return null; 
    }
}

export default getData;
