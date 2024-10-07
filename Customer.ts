class Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  medicalStatus: MedicalStatus;
  bookings: Booking[] = [];
  trainingStatus: TrainingStatus;
  preferences: Preferences;
  healthData: HealthData[] = [];
  postFlightPackage?: PostFlightPackage;

  constructor(id: string, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.medicalStatus = new MedicalStatus();
    this.trainingStatus = new TrainingStatus();
    this.preferences = new Preferences();
  }
}
