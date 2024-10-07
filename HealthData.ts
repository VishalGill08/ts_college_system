class HealthData {
  heartRate: number;
  bloodPressure: string;
  oxygenLevel: number;
  timestamp: Date;

  constructor(heartRate: number, bloodPressure: string, oxygenLevel: number, timestamp: Date) {
    this.heartRate = heartRate;
    this.bloodPressure = bloodPressure;
    this.oxygenLevel = oxygenLevel;
    this.timestamp = timestamp;
  }
}
