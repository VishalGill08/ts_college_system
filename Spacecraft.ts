class Spacecraft {
  id: string;
  name: string;
  model: string;
  status: SpacecraftStatus;
  capacity: number;

  constructor(id: string, name: string, model: string, capacity: number) {
    this.id = id;
    this.name = name;
    this.model = model;
    this.capacity = capacity;
    this.status = SpacecraftStatus.OPERATIONAL;
  }
}
