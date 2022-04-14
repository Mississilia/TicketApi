'use strict'
class Client {
    id;
    prenom;
    nom;
    email;
    motDePasse;
    role;
    constructor(id, prenom, nom, email,motDePasse, role){
        this.id = id;
        this.prenom = prenom;
        this.nom = nom;
        this.email = email;
        this.motDePasse = motDePasse;
        this.role = role;
    }
}
