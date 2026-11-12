// 1-Moyenne générale (arrondie à 2 décimales)
export function moyenneGenerale(liste) {
    if (liste.length === 0) return 0;
    const somme = liste.reduce((acc, { note }) => acc + note, 0);
    return Number((somme / liste.length).toFixed(2));
}

// 2-Étudiants admis (note >= 10)
export function admis(liste) {
    return liste.filter(({ note }) => note >= 10);
}

// 3-Noms formatés
export function nomsFormates(liste) {
    return liste.map(({ nom, prenom }) => `< ${nom.toUpperCase()} ${prenom} >`);
}

// 4-Effectif par filière 
export function effectifParFiliere(liste) {
    return liste.reduce((acc, { filiere }) => {
        acc[filiere] = (acc[filiere] || 0) + 1;
        return acc;
    }, {});
}

// 5-Moyenne par filière
export function moyenneParFiliere(liste) {
    const groupes = liste.reduce((acc, { filiere, note }) => {
        if (!acc[filiere]) acc[filiere] = { somme: 0, count: 0 };
        acc[filiere].somme += note;
        acc[filiere].count += 1;
        return acc;
    }, {});

    return Object.fromEntries(
        Object.entries(groupes).map(([filiere, { somme, count }]) => [
            filiere,
            Number((somme / count).toFixed(2))
        ])
    );
}

// 6-Classement par note décroissante (sans modifier l'original)
export function classementParNote(liste) {
    return [...liste].sort((a, b) => b.note - a.note);
}

// 7-Modification d'une note 
export function majNote(liste, id, nouvelleNote) {
    return liste.map(etudiant => 
        etudiant.id === id ? { ...etudiant, note: nouvelleNote } : etudiant
    );
}