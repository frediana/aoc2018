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

export default function(string) {
	const occurences = groupOccurencesNbByLetter(string);
	const nbTwices = nbUniqueOccurence(2, occurences);
	const nbThrices = nbUniqueOccurence(3, occurences);

	return {
		twice: 2 * nbTwices,
		thrice: 3 * nbThrices
	};
}
