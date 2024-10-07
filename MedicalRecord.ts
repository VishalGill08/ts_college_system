class MedicalRecord {
  id: string;
  customer: Customer;
  results: string;
  date: Date;
  status: MedicalStatus;

  constructor(id: string, customer: Customer, results: string, date: Date) {
    this.id = id;
    this.customer = customer;
    this.results = results;
    this.date = date;
    this.status = new MedicalStatus();
  }
}
