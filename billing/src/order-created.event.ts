export class OrderCreatedEvent {
  constructor(
    public readonly userId: string,
    public readonly price: number,
    public readonly orderId: string,
  ) {}
}
