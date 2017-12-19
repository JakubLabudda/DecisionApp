export const isAdult = (age) => {
	if(age>18) {
		return true;
	} else {
		return false;
	}
};

export const canDrink = (age) => {
	if(age>18) {
		return true;
	}
	else {
		return false;
	}
};

const isSenior = (age) => age >= 65;

export default isSenior;
// isAdult = (age) => age >= 18;