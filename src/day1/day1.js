// class FrequencySolver {
// 	constructor(initialValue) {
// 		this.currentValue = initialValue || 0;
// 	}
//
// 	pushValue(value) {
// 		this.currentValue += value;
// 	}
//
// 	pushValues(values) {
// 		values.forEach((v) => this.pushValue(v));
// 	}
//
// 	get value() {
// 		return this.currentValue;
// 	}
// }

export default function(values) {
	return values.reduce((acc, current) => acc + current, 0);
}
