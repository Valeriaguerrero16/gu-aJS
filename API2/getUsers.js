
export async function getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users"; 

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Hubo un error al obtener los datos:", error.message);
        return [];
    }
}
