class FrequencySolver {
	constructor(initialValue) {
		this.currentValue = initialValue || 0;
	}

	pushValue(value) {
		this.currentValue += value;
	}

	pushValues(values) {
		values.forEach((v) => this.pushValue(v));
	}

	get value() {
		return this.currentValue;
	}
}

export { FrequencySolver };

export default {};
