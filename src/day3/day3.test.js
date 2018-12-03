import { Grid } from './day3';

describe('day3', () => {
	test('grid', () => {
		const grid = new Grid(8, 8);

		console.log(grid.data);
		grid.insert({ x: 1, y: 3 }, { width: 4, height: 4 }, 1);
		console.log(grid.data);
	});
});
