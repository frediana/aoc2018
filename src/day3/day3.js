// TODO: purify this and get rid of this class
export class Grid {
	constructor() {
		this.data = [];
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
		for (let i = 0; i < dim.height; i += 1) {
			const y = at.y + i;
			for (let j = 0; j < dim.width; j += 1) {
				const x = at.x + j;
				if (this.data[y][x] === 0) {
					this.data[y][x] = id;
				} else {
					// overlaps
					this.data[y][x] = -1;
				}
			}
		}
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

export const parseOrigin = (string) =>
	string
		.split(':')[0]
		.split(',')
		.map((c) => parseInt(c, 10));

export const parseDimensions = (string) => string.split('x').map((c) => parseInt(c, 10));

export const parseId = (string) => parseInt(string.substring(1), 10);

export const parse = (string) => {
	const [idString, , origin, dimensions] = string.split(' ');
	const [x, y] = parseOrigin(origin);
	const [width, height] = parseDimensions(dimensions);
	const id = parseId(idString);

	return {
		id,
		at: {
			x,
			y
		},
		dim: {
			width,
			height
		}
	};
};

export default function() {
	return 'day3';
}
