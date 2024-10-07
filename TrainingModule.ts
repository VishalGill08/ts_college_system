class TrainingModule {
  id: string;
  name: string;
  description: string;
  status: TrainingStatus;
  duration: number; // in hours

  constructor(id: string, name: string, description: string, duration: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.duration = duration;
    this.status = new TrainingStatus();
  }
}
