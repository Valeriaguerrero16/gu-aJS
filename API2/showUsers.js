
export function showUsers(users) {
    const div = document.getElementById("content");

    users.forEach(user => {
        const p = document.createElement("p");
        p.textContent = `Nombre: ${user.name}, Email: ${user.email}`;
        div.appendChild(p);
    });
}
