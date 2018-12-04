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

const getGuardsIndexes = (parsedShifts) => {
	const guardsIdx = [];
	parsedShifts.forEach((guard, idx) => {
		if (guard.action.type === 'guard') {
			guardsIdx.push(idx);
		}
	});

	return guardsIdx;
};

const getActionsSlotsPerGuard = (guardsIdx, parsedShifts) => {
	const actionsSlotPerGuard = {};
	guardsIdx.forEach((guardIdx, idx) => {
		const isLast = idx === guardsIdx.length - 1;

		if (isLast) {
			actionsSlotPerGuard[guardIdx] = [guardIdx + 1, parsedShifts.length - 1];
		} else {
			const nextGuardIdx = guardsIdx[idx + 1];
			actionsSlotPerGuard[guardIdx] = [guardIdx + 1, nextGuardIdx - 1];
		}
	});

	return actionsSlotPerGuard;
};

// return: [ guard: { id, shifts: [{ start, length }] ]
export const getAllGuards = (shifts) => {
	const parsedShifts = parseShifts(shifts);
	const guardsIdx = getGuardsIndexes(parsedShifts);
	const actionsSlotPerGuard = getActionsSlotsPerGuard(guardsIdx, parsedShifts);

	console.log('actionsSlotPerGuard', actionsSlotPerGuard);
	console.log('guardsIdx', guardsIdx);

	const guards = parsedShifts.map((shift, idx) => {
		const guard = {};
		if (shift.action.type === 'guard') {
			guard.id = shift.action.id;
			const [sliceFrom, sliceTo] = actionsSlotPerGuard[idx];
			const actionsForThisGuard = shifts.slice(sliceFrom, sliceTo + 1);
			guard.shifts = actionsForThisGuard.join(' ');
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
