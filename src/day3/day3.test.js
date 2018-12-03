import { Grid, parseOrigin, parseDimensions, parseId } from './day3';

describe('day3', () => {
	test('grid', () => {
		const grid = new Grid(8, 8);

		console.log(grid.data);
		grid.insert({ x: 1, y: 3 }, { width: 4, height: 4 }, 1);
		console.log(grid.data);
	});

	describe.each([['1,3', [1, 3]], ['3,1', [3, 1]], ['5,5', [5, 5]]])(
		'Given origin %p',
		(input, expected) => {
			test(`parseOrigin should return at(${expected[0]},${expected[1]})`, () => {
				const [x, y] = parseOrigin(input);
				const [expectedX, expectedY] = expected;
				expect(x).toEqual(expectedX);
				expect(y).toEqual(expectedY);
			});
		}
	);

	describe.each([['4x4', [4, 4]], ['3x3', [3, 3]], ['2x2', [2, 2]]])(
		'Given dimension %p',
		(input, expected) => {
			test(`parseDimensions should return dimensions(w:${expected[0]},h:${expected[1]})`, () => {
				const [width, height] = parseDimensions(input);
				const [expectedWidth, expectedHeight] = expected;
				expect(width).toEqual(expectedWidth);
				expect(height).toEqual(expectedHeight);
			});
		}
	);

	describe.each([['#1', 1], ['#2', 2], ['#3', 3]])('Given id %p', (input, expected) => {
		test(`parseId should return id: ${expected}`, () => {
			const id = parseId(input);
			expect(id).toEqual(expected);
		});
	});
});
