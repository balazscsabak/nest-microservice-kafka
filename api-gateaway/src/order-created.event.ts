export class OrderCreatedEvent {
  constructor(
    public readonly userId: string,
    public readonly price: number,
    public readonly orderId: string,
  ) {}

  toString() {
    return JSON.stringify({
      userId: this.userId,
      price: this.price,
      orderId: this.orderId,
    });
  }
}
