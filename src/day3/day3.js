export class Grid {
	constructor(width, height) {
		this.data = [];
		for (let i = 0; i < height; i += 1) {
			this.data.push(Array(width).fill(0));
		}
	}

	insert(at, dim, id) {
		for (let i = 0; i < dim.height; i += 1) {
			const y = at.y + i;
			for (let j = 0; j < dim.width; j += 1) {
				const x = at.x + j;
				this.data[y][x] = id;
			}
		}
	}
}

export default function() {
	return 'day3';
}
