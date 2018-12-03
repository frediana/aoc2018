import { Grid, parseOrigin } from './day3';

describe('day3', () => {
	test('grid', () => {
		const grid = new Grid(8, 8);

		console.log(grid.data);
		grid.insert({ x: 1, y: 3 }, { width: 4, height: 4 }, 1);
		console.log(grid.data);
	});

	describe.each([['1,3', [1, 3]], ['3,1', [3, 1]], ['5,5', [5, 5]]])(
		'Given %p',
		(input, expected) => {
			test(`parseOrigin should return at(${expected[0]},${expected[1]})`, () => {
				const [x, y] = parseOrigin(input);
				const [expectedX, expectedY] = expected;
				expect(x).toEqual(expectedX);
				expect(y).toEqual(expectedY);
			});
		}
	);
});
