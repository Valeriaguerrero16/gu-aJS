import getData from "./getDataAPI.js";

async function showData() {
    try {
        const data = await getData();

        // Verifico si los datos son válidos
        if (!data || !Array.isArray(data)) {
            throw new Error("No se recibieron datos válidos");
        }

        let div = document.getElementById("content");
        div.innerHTML = ""; 

        data.forEach(e => {
            let p = document.createElement("p");
            p.textContent = e.name; 
            div.appendChild(p);
        });
    } catch (error) {
        console.error("Error al mostrar los datos:", error.message);
    }
}

export default showData;
