# QUESTION 1: POUR /USERS/1:

Methode: GET
Code d'etat: (succes) 200 OK
Type de contenu: application/json; charset=utf-8
deux champs: id; firstName

# QUESTION 2: POUR /USERS/99999:

code: (ressource introuvable) 404 NOT Found
Signification: Le serveur a bien compris la demande,mais l'element demand n'exite pas
Reaction de l'interface: Elle doit afficher un message propre a l'utilisateur (Utilisateur introuvable) au lieu de planter

# Question 3: Classement(Client/Serveur):

a: Client
b: Serveur
c: Serveur
d: Client
e: Serveur

# QUESTION 4: Association des codes:

201 Created: Ressource cree avec succes
401 Unauthorized: Non authentifie(Pas connecte) redirige vers la page de connexion
404 Not Found: deja explique
500 Internal Server ERROR: Erreur interne du service
