import { Injectable } from '@angular/core';
import { TICKETS } from './mocks/tickets.mock';

@Injectable()
export class TicketService {
    miVariableTicketGlobal = 'soy una variable local';

    getTicket() {
        return TICKETS;
    }

    getVariableLocal():string {
        return this.miVariableTicketGlobal;
    }
}