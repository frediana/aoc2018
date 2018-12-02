const groupOccurencesNbByLetter = (string) =>
	string.split('').reduce((acc, current) => {
		const groups = acc;
		if (!groups[current]) {
			groups[current] = 0;
		}

		groups[current] += 1;

		return groups;
	}, {});

const nbUniqueOccurence = (nbOccurence, occurences) =>
	Object.keys(occurences).reduce((acc, letter) => {
		if (occurences[letter] === nbOccurence) {
			return 1;
		}
		return acc;
	}, 0);

export const countOccurences = (string) => {
	const occurences = groupOccurencesNbByLetter(string);
	const nbTwices = nbUniqueOccurence(2, occurences);
	const nbThrices = nbUniqueOccurence(3, occurences);

	return {
		twice: 2 * nbTwices,
		thrice: 3 * nbThrices
	};
};

export const checksum = (values) => {
	const occurences = values.reduce(
		(acc, current) => {
			const currentOccurences = countOccurences(current);
			const incrementTwice = currentOccurences.twice > 0 ? 1 : 0;
			const incrementThrice = currentOccurences.thrice > 0 ? 1 : 0;
			return {
				twice: acc.twice + incrementTwice,
				thrice: acc.thrice + incrementThrice
			};
		},
		{
			twice: 0,
			thrice: 0
		}
	);

	return occurences.twice * occurences.thrice;
};

const countCharDiff = (string1, string2) => {
	let count = 0;
	for (let i = 0; i < string1.length; i += 1) {
		if (string1.charAt(i) !== string2.charAt(i)) {
			count += 1;
		}
	}

	return count;
};

export const removeCharDiff = (string1, string2) => {
	let res = '';
	for (let i = 0; i < string1.length; i += 1) {
		if (string1.charAt(i) === string2.charAt(i)) {
			res += string1.charAt(i);
		}
	}

	return res;
};

export const findCloserIds = (values) => {
	let min = values.length;
	let res;
	let i = 0;
	let j = 1;
	while (i < values.length) {
		const string1 = values[i];

		while (j < values.length) {
			const string2 = values[j];
			const diff = countCharDiff(string1, string2);

			if (diff < min && string1 !== string2) {
				min = diff;
				res = [string1, string2];
			}

			j += 1;
		}

		j = i + 1;
		i += 1;
	}

	return res;
};
