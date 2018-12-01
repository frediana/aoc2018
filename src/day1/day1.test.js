import { FrequencySolver } from './day1';

describe('day1', () => {
	let frequencySolver;

	describe('Given a null initial frequency', () => {
		beforeEach(() => {
			frequencySolver = new FrequencySolver();
		});

		describe('pushValue', () => {
			describe('When frequency change by a negative value', () => {
				it('should decrease frequency', () => {
					frequencySolver.pushValue(-1);
					expect(frequencySolver.value).toEqual(-1);
				});
			});

			describe('When frequency change by a positive value', () => {
				it('sould increase frequency', () => {
					frequencySolver.pushValue(1);
					expect(frequencySolver.value).toEqual(1);
				});
			});

			describe('When frequency change by 0', () => {
				it('sould leave frequency un-changed', () => {
					frequencySolver.pushValue(0);
					expect(frequencySolver.value).toEqual(0);
				});
			});
		});

		describe('pushValues', () => {
			describe.each([[1, 1, 1, 3], [1, 1, -2, 0], [-1, -2, -3, -6]])(
				'Given (%i, %i, %i)',
				(v1, v2, v3, expectedResult) => {
					test(`Result should be ${expectedResult}`, () => {
						frequencySolver = new FrequencySolver();
						frequencySolver.pushValue(v1);
						frequencySolver.pushValue(v2);
						frequencySolver.pushValue(v3);
						expect(frequencySolver.value).toEqual(expectedResult);
					});
				}
			);
		});
	});
});
