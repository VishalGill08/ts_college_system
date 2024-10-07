class Flight {
  id: string;
  type: FlightType;
  date: Date;
  crew: Crew[] = [];
  spacecraft: Spacecraft;
  capacity: number;
  duration: number; // duration in hours

  constructor(id: string, type: FlightType, date: Date, spacecraft: Spacecraft, capacity: number, duration: number) {
    this.id = id;
    this.type = type;
    this.date = date;
    this.spacecraft = spacecraft;
    this.capacity = capacity;
    this.duration = duration;
  }
}
