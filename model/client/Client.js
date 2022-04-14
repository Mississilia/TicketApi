'use strict'
class Client {
    idClient;
    prenom;
    nom;
    email;
    motDePasse;
    role;
    constructor(idClient, prenom, nom, email,motDePasse, role){
        this.idClient = idClient;
        this.prenom = prenom;
        this.nom = nom;
        this.email = email;
        this.motDePasse = motDePasse;
        this.role = role;
    }
}
