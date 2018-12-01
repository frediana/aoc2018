const part1 = (values) => values.reduce((acc, current) => acc + current, 0);

const part2 = (values) => {
	const seen = new Set([0]);
	let i = 0;
	let sum = 0;

	while (true) {
		sum += values[i];

		if (seen.has(sum)) {
			break;
		}

		seen.add(sum);

		if (i === values.length - 1) {
			i = 0;
		} else {
			i += 1;
		}
	}

	return sum;
};

export { part1 };
export { part2 };

export default {};
