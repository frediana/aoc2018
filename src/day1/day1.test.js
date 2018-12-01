import frequencySolver from './day1';

describe('day1', () => {
	describe.each([[[1, 1, 1], 3], [[1, 1, -2], 0], [[-1, -2, -3], -6]])(
		'Given (%i, %i, %i)',
		(values, expectedResult) => {
			test(`Result should be ${expectedResult}`, () => {
				expect(frequencySolver(values)).toEqual(expectedResult);
			});
		}
	);
});
