const Client = require('model/client/Client')

class acheterTicket{
    static async acheterTicket(idClient){
        try {
            return await Client.create({
                idClient,
                prenom,
                nom
            })
        }
        catch (e){
            throw Error('Erreur lorsque vous essayez d\'acheter un tiquet')
        }
    }
}
