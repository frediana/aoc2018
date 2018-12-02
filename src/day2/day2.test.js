import fs from 'fs';
import readline from 'readline';
import { countOccurences, checksum, findCloserIds, removeCharDiff } from './day2';

describe('day2 part 1', () => {
	describe.each([
		[
			'abcdef',
			{
				twice: 0,
				thrice: 0
			}
		],
		[
			'bababc',
			{
				twice: 2,
				thrice: 3
			}
		],
		[
			'abbcde',
			{
				twice: 2,
				thrice: 0
			}
		],
		[
			'abcccd',
			{
				twice: 0,
				thrice: 3
			}
		],
		[
			'aabcdd',
			{
				twice: 2,
				thrice: 0
			}
		],
		[
			'abcdee',
			{
				twice: 2,
				thrice: 0
			}
		],
		[
			'ababab',
			{
				twice: 0,
				thrice: 3
			}
		]
	])('Given %p)', (string, expectedResult) => {
		test(`Result should be ${expectedResult}`, () => {
			expect(countOccurences(string)).toEqual(expectedResult);
		});
	});

	const values = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'];
	describe(`Given ${values}`, () => {
		test(`checksum should be 12`, () => {
			expect(checksum(values)).toEqual(12);
		});
	});

	const myInterface = readline.createInterface({
		input: fs.createReadStream(`${__dirname}/input.txt`)
	});

	const data = [];

	myInterface.on('line', (line) => data.push(line));

	myInterface.on('close', () => {
		console.log(`Solution for part1 ====> ${checksum(data)}`);
	});
});

describe('day2 part2', () => {
	const values = ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'];
	describe(`Given ${values}`, () => {
		test('should get most closer IDS', () => {
			expect(findCloserIds(values)).toEqual(['fghij', 'fguij']);
		});

		test(`should get common letters for IDS should be fgi`, () => {
			const [id1, id2] = findCloserIds(values);
			expect(removeCharDiff(id1, id2)).toEqual('fgij');
		});
	});

	const myInterface = readline.createInterface({
		input: fs.createReadStream(`${__dirname}/input.txt`)
	});

	const data = [];

	myInterface.on('line', (line) => data.push(line));

	myInterface.on('close', () => {
		const [id1, id2] = findCloserIds(data);
		console.log(`Solution for part2 ====> ${removeCharDiff(id1, id2)}`);
	});
});
