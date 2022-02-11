import { Publisher, Subjects, TicketUpdatedEvent } from '@lazymtlib/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
