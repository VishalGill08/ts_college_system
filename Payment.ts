class Payment {
  id: string;
  booking: Booking;
  amount: number;
  date: Date;
  status: PaymentStatus;

  constructor() {
    this.id = "";
    this.amount = 0;
    this.date = new Date();
    this.status = PaymentStatus.PENDING;
  }
}
