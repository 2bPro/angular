export class Photo {
	public name: string;
	public description: string;
	public imagePath: string;
	public location: string;

	constructor(name: string, desc: string, imgPath: string, loc: string) {
		this.name = name;
		this.description = desc;
		this.imagePath = imgPath;
		this.location = loc;
	}
}
