class Car {
	constructor(brand, color) {
		this.brand = brand;
		this.color = color;
	}

	start() {
		console.log(`${this.color} & ${this.brand} car has started`);
	}
}

class Price extends Car {
	constructor(brand, color, price) {
		super(brand, color);
		this.price = price;
	}

	getPrice() {
		console.log(`${this.color} & ${this.brand} car has price of ${this.price}`);
	}
}

const car = new Price('bmw', 'red', 2000000);
console.log(car.getPrice());
