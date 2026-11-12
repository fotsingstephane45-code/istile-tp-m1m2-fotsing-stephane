export async function chargerUtilisateurs(limite = 5, base = "https://dummyjson.com") {
    try {
        const response = await fetch(`${base}/users?limit=${limite}`);
        if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);
        const data = await response.json();
        // On ne garde que id, prenom, nom, email (en mappant firstName et lastName)
        return data.users.map(({ id, firstName: prenom, lastName: nom, email }) => ({
            id,
            prenom,
            nom,
            email
        }));
    } catch (error) {
        console.error("Échec du chargement des utilisateurs :", error.message);
        return [];
    }
}

export async function chargerUtilisateur(id, base = "https://dummyjson.com") {
    try {
        const response = await fetch(`${base}/users/${id}`);
        if (response.status === 404) {
            console.log(`Utilisateur [${id}] introuvable (404)`);
            return null;
        }
        if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);
        const user = await response.json();
        return {
            id: user.id,
            prenom: user.firstName,
            nom: user.lastName,
            email: user.email
        };
    } catch (error) {
        console.error("Erreur réseau ou autre :", error.message);
        return null;
    }
}