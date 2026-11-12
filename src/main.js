import { readFile } from "node:fs/promises";
import { 
    moyenneGenerale, 
    admis, 
    nomsFormates, 
    effectifParFiliere, 
    moyenneParFiliere, 
    classementParNote, 
    majNote 
} from "./etudiants.js";
import { chargerUtilisateurs, chargerUtilisateur } from "./charger.js";

// Ligne de secours si pas d'Internet (à décommenter si besoin)
// import simulerFetch from "../outils/simulerFetch.js";
// globalThis.fetch = simulerFetch;

async function lancerApplication() {
    // 1. Charger les données du fichier JSON local
    const rawData = await readFile(new URL("../data/etudiants.json", import.meta.url), "utf8");
    const etudiants = JSON.parse(rawData);

    console.log("=== PARTIE D : STATISTIQUES ETUDIANTS ===");
    console.log("Moyenne générale :", moyenneGenerale(etudiants));
    console.log("Nombre d'admis :", admis(etudiants).length);
    console.log("Noms formatés (3 premiers) :", nomsFormates(etudiants).slice(0, 3));
    console.log("Effectif par filière :", effectifParFiliere(etudiants));
    console.log("Moyenne par filière :", moyenneParFiliere(etudiants));


    console.log("\n=== PARTIE E : ASYNCHRONISME ET API ===");
    // Scénario 1 : Succès
    console.log("--- Scénario 1 : chargerUtilisateurs(3) ---");
    const users3 = await chargerUtilisateurs(3);
    console.log(users3);

    // Scénario 2 : Utilisateur inexistant (404)
    console.log("--- Scénario 2 : chargerUtilisateur(99999) ---");
    const user404 = await chargerUtilisateur(99999);
    console.log("Résultat :", user404);

    // Scénario 3 : Erreur réseau / hôte invalide
    console.log("Scénario 3 : Erreur réseau (hôte invalide)");
    const errReseau = await chargerUtilisateurs(3, "https://hote-invalide.exemple");
    console.log("Résultat :", errReseau);
}

lancerApplication();