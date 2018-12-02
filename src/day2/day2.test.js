import countOccurences from './day2';

describe('day2', () => {
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

	// const myInterface = readline.createInterface({
	// 	input: fs.createReadStream(`${__dirname}/input.txt`)
	// });
	//
	// const data = [];
	//
	// myInterface.on('line', (line) => {
	// 	const value = parseInt(line, 10);
	// 	data.push(value);
	// });
	//
	// myInterface.on('close', () => {
	// 	console.log(`Solution for part1 ====> ${frequencySolver(data)}`);
	// });
});
