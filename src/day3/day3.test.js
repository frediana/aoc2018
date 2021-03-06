import fs from 'fs';
import readline from 'readline';
import Resolver from './day3.resolver';
import { parseOrigin, parseDimensions, parseId, parse } from './day3.parser';

describe('day3', () => {
	test('grid', () => {
		const grid = new Resolver();

		// console.log(grid.data);
		grid.insert({ x: 1, y: 3 }, { width: 4, height: 4 }, 1);
		// console.log(grid.data);
	});

	describe.each([['1,3:', [1, 3]], ['3,1:', [3, 1]], ['5,5:', [5, 5]]])(
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

	describe.each([
		[
			'#1 @ 1,3: 4x4',
			{
				id: 1,
				at: { x: 1, y: 3 },
				dim: { width: 4, height: 4 }
			}
		],
		[
			'#2 @ 3,1: 4x4',
			{
				id: 2,
				at: { x: 3, y: 1 },
				dim: { width: 4, height: 4 }
			}
		],
		[
			'#3 @ 5,5: 2x2',
			{
				id: 3,
				at: { x: 5, y: 5 },
				dim: { width: 2, height: 2 }
			}
		]
	])('Given line %p', (input, expected) => {
		test(`parse should return id: ${expected.id}, at(${expected.at.x}, ${expected.at.y})`, () => {
			const {
				id,
				at: { x, y },
				dim: { width, height }
			} = parse(input);
			const { id: expectedId, at: expectedOrigin, dim: expectedDimensions } = expected;
			expect(id).toEqual(expectedId);

			expect(x).toEqual(expectedOrigin.x);
			expect(y).toEqual(expectedOrigin.y);

			expect(width).toEqual(expectedDimensions.width);
			expect(height).toEqual(expectedDimensions.height);
		});
	});

	const values = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];
	describe(`Given ${values}`, () => {
		const grid1 = new Resolver();
		test('Result when parse and insert to grid', () => {
			values.forEach((line) => {
				const { id, at, dim } = parse(line);

				grid1.insert(at, dim, id);
			});
			console.log('result', grid1.data);
			console.log('countOverlaps', grid1.countOverlaps());
			console.log('cleanIds', grid1.cleanIds);
		});
	});

	const myInterface = readline.createInterface({
		input: fs.createReadStream(`${__dirname}/input.txt`)
	});

	const data = [];

	myInterface.on('line', (line) => data.push(parse(line)));

	myInterface.on('close', () => {
		const gridSolution1 = new Resolver();
		data.forEach(({ id, at, dim }) => {
			gridSolution1.insert(at, dim, id);
		});

		console.log(`Solution for part1 ====> ${gridSolution1.countOverlaps()}`);
		console.log(`Solution for part2 ====> ${gridSolution1.cleanIds}`);
	});
});
