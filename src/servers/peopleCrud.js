import { API_URL } from "./configApi";

export async function getRegistro() {
     const response = await fetch(`${API_URL}/registro`);

     const data = await response.json();

     return data;
}


export async function createRegistro(registro) {
    const response = await fetch(`${API_URL}/registro`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registro)
    });

    return response.json();
}

export async function updateRegistro(id, registro){
    const response = await fetch(`${API_URL}/registro/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registro)
    });

    return response.json();
}

export async function deleteRegistro(id) {
    await fetch(`${API_URL}/registro/${id}`, {
        method: "DELETE"
    });
}