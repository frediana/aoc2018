import fs from 'fs';
import readline from 'readline';
import { part1 as frequencySolver, part2 as firstFrequencyReachedTwice } from './day1';

describe('day1 part 1', () => {
	describe.each([[[1, 1, 1], 3], [[1, 1, -2], 0], [[-1, -2, -3], -6]])(
		'Given %p)',
		(values, expectedResult) => {
			test(`Result should be ${expectedResult}`, () => {
				expect(frequencySolver(values)).toEqual(expectedResult);
			});
		}
	);

	const myInterface = readline.createInterface({
		input: fs.createReadStream(`${__dirname}/input.txt`)
	});

	const data = [];

	myInterface.on('line', (line) => {
		const value = parseInt(line, 10);
		data.push(value);
	});

	myInterface.on('close', () => {
		console.log(`Solution for part1 ====> ${frequencySolver(data)}`);
	});
});

describe('day1 part 2', () => {
	describe.each([
		[[+1, -1], 0],
		[[+1, -2, +3, +1, +1, -2], 2],
		[[+3, +3, +4, -2, -4], 10],
		[[-6, +3, +8, +5, -6], 5],
		[[+7, +7, -2, -7, -4], 14]
	])('Given %p)', (values, expectedResult) => {
		test(`Result should be ${expectedResult}`, () => {
			expect(firstFrequencyReachedTwice(values)).toEqual(expectedResult);
		});
	});

	const myInterface = readline.createInterface({
		input: fs.createReadStream(`${__dirname}/input.txt`)
	});

	const data = [];

	myInterface.on('line', (line) => {
		const value = parseInt(line, 10);
		data.push(value);
	});

	myInterface.on('close', () => {
		console.log(`Solution for part2 ====> ${firstFrequencyReachedTwice(data)}`);
	});
});
