const HAMBURGERS = {
	type: {
		'small': {
			price: 3,
			ccal: 20
		},
		'big': {
			price: 10,
			ccal: 40
		}
	},
	fill: {
		'cheese': {
			price: 1,
			ccal: 20
		},
		'salad': {
			price: 2,
			ccal: 25
		},
		'potato': {
			price: 1.5,
			ccal: 10
		}
	},
	add: {
		'flavour': {
			price: 1.5,
			ccal: 0
		},
		'mayonese': {
			price: 2,
			ccal: 5
		}
	}
};

class Hamburger {
	// ccal = 0;
	// price = 0.00;

	constructor(size, fill, add = []){
		this.size = size;
		this.fill = fill;
		this.add = add;
	}
	getCcal(){
		this.ccal = HAMBURGERS.type[this.size].ccal + HAMBURGERS.fill[this.fill].ccal;
		if (Array.isArray(this.add)) {
			this.add
				.forEach(value => {
				this.ccal += HAMBURGERS.add[value].ccal;
			})
		} else {
			this.ccal += HAMBURGERS.add[this.add].ccal
		}
		
		let data = console.log(`This hamburger contains ${this.ccal} ccal`)
		return data;
	}
	getPrice(){
		this.price = HAMBURGERS.type[this.size].price + HAMBURGERS.fill[this.fill].price;
		if (Array.isArray(this.add)) {
			this.add
				.forEach(value => {
				this.price += HAMBURGERS.add[value].price;
			})
		} else {
			this.price += HAMBURGERS.add[this.add].price;
		}
		let data = console.log(`This hamburger costs ${this.price} uah`)
		return data;
	}
}



let bigMac = new Hamburger('small', 'potato', 'flavour');
console.log(bigMac);

bigMac.getCcal();
bigMac.getPrice();


let bigTasty = new Hamburger('big', 'salad', ['mayonese', 'flavour']);
console.log(bigTasty);

bigTasty.getCcal();
bigTasty.getPrice();

let cheeseBurger = new Hamburger('big', 'cheese');
console.log(cheeseBurger);

cheeseBurger.getCcal();
cheeseBurger.getPrice();









