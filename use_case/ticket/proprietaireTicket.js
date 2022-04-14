class ProprietaireTicket {
    async constructor() {
        async
        verifierProprietaire(ticketId, clientId)
        {
            let response = await controllerTicket(ticketId, clientId);
            if (response == clientId) return true;
            else false;
        }
    }
}
