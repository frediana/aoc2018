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
