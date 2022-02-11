import { Publisher, Subjects, TicketCreatedEvent } from '@lazymtlib/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
