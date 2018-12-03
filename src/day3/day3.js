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
				if (this.data[y][x] === 0) {
					this.data[y][x] = id;
				} else {
					// overlaps
					this.data[y][x] = -1;
				}
			}
		}
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
