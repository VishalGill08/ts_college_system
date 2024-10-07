class PostFlightPackage {
  id: string;
  photos: string[] = [];
  videos: string[] = [];
  merchandiseOptions: string[] = [];

  constructor(id: string) {
    this.id = id;
  }
}
