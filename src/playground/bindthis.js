
let x = 9;
const obj = {
	x: 1,
	getX() {
		return this.x;
	}
};

console.log(obj.getX());

const retrieveX = obj.getX.bind(obj);

console.log(retrieveX());