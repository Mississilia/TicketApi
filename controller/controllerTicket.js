class controllerTicket{
    constructor(){}

    async afficherTickets(){
        return await Persistency.afficherTickets()
    }

    async afficherParClient(customerId){
        return await Persistency.afficherParClient(ClientId)
    }

    async getTicketOwner(ticketId){
        return await Persistency.getTicketOwner(ticketId)
    }
}
