const parseDateTime = (rawDate, rawTime) => {
	return {
		date: rawDate.substring(1),
		time: rawTime.substring(0, rawTime.length - 1)
	};
};

const parseAction = (rawAction) => {
	const [type, rowId] = rawAction;
	switch (type) {
		case 'Guard':
			return {
				type: type.toLowerCase(),
				id: rowId.substring(1)
			};

		case 'wakes':
		case 'falls':
			return { type };
	}
};

// [time] action
const parseShift = (shift) => {
	const [rawDate, rawTime, ...rawActions] = shift.split(' ');
	const { date, time } = parseDateTime(rawDate, rawTime);
	const action = parseAction(rawActions);
	return {
		date,
		time,
		action
	};
};

export const parseShifts = (shifts) => shifts.map((shift) => parseShift(shift));

// return: [ guard: { id, shifts: [{ start, length }] ]
export const getAllGuards = (shifts) => {
	const parsedShifts = parseShifts(shifts);

	const guards = parsedShifts.map((shift) => {
		const guard = {};
		if (shift.action.type === 'guard') {
			guard.id = shift.action.id;
		}

		return guard;
	});

	return guards;
};

const getTotalTimeAsleep = (guard) =>
	guard.shifts.reduce((totalTimeAsleep, shift) => shift.length, 0);

// return guard: { id, shifts: [{ start, length }]
export const getGuardMostTotalSleep = (shifts) => {
	let guardMostAsleep;
	let maxTimeAsleep = 0;
	getAllGuards(shifts).forEach((guard) => {
		const guardTotalTimeAsleep = getTotalTimeAsleep(guard.shifts);

		if (guardTotalTimeAsleep > maxTimeAsleep) {
			maxTimeAsleep = guardTotalTimeAsleep;
			guardMostAsleep = guard.id;
		}
	});

	return guardMostAsleep;
};

// return int [0..59]
// const getMinuteMostAsleep = (guard) => {};

export default {};
