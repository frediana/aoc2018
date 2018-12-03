// TODO: purify this and get rid of this class
export default class Resolver {
	constructor() {
		this.data = [];
		this.cleans = {};
	}

	growIfNecessary(at, dim) {
		const maxX = at.x + dim.width;
		const maxY = at.y + dim.height;

		for (let i = 0; i < maxY; i += 1) {
			if (!this.data[i]) {
				this.data[i] = [];
			}

			for (let j = 0; j < maxX; j += 1) {
				if (!this.data[i][j]) {
					this.data[i][j] = 0;
				}
			}
		}
	}

	insert(at, dim, id) {
		this.growIfNecessary(at, dim);
		this.cleans[id] = true;
		for (let i = 0; i < dim.height; i += 1) {
			const y = at.y + i;
			for (let j = 0; j < dim.width; j += 1) {
				const x = at.x + j;
				if (this.data[y][x] === 0) {
					this.data[y][x] = id;
				} else {
					// overlaps
					const oldValue = this.data[y][x];
					this.data[y][x] = -1;
					this.cleans[id] = false;
					this.cleans[oldValue] = false;
				}
			}
		}
	}

	get cleanIds() {
		return Object.keys(this.cleans).filter((k) => this.cleans[k] === true);
	}

	countOverlaps() {
		let count = 0;
		for (let i = 0; i < this.data.length; i += 1) {
			for (let j = 0; j < this.data[i].length; j += 1) {
				if (this.data[i][j] === -1) {
					count += 1;
				}
			}
		}
		return count;
	}
}
