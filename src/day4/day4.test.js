import { parseShifts, getAllGuards } from './day4';

describe('day4', () => {
	test('should be defined', () => {
		expect(parseShifts).toBeDefined();
	});
});

const data = [
	'[1518-11-01 00:00] Guard #10 begins shift',
	'[1518-11-01 00:05] falls asleep',
	'[1518-11-01 00:25] wakes up',
	'[1518-11-01 00:30] falls asleep',
	'[1518-11-01 00:55] wakes up',
	'[1518-11-01 23:58] Guard #99 begins shift',
	'[1518-11-02 00:40] falls asleep',
	'[1518-11-02 00:50] wakes up'
];

// console.log(parseShifts(data));
console.log(getAllGuards(data));
