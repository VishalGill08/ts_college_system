class Booking {
  id: string;
  customer: Customer;
  flight: Flight;
  date: Date;
  status: BookingStatus;
  payment: Payment;
  preferences: Preferences;

  constructor(id: string, customer: Customer, flight: Flight, date: Date) {
    this.id = id;
    this.customer = customer;
    this.flight = flight;
    this.date = date;
    this.status = BookingStatus.PENDING;
    this.payment = new Payment();
    this.preferences = new Preferences();
  }
}
