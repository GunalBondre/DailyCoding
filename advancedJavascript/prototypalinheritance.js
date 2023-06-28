function shape(color) {
	this.color = color;
}
shape.prototype.getColor = function () {
	return this.color;
};

function circle(radius, color) {
	shape.call(this, color);
	this.radius = radius;
}

circle.prototype = Object.create(shape.prototype);

circle.prototype.constructor = circle;

const myCircle = new circle(5, 'red');
console.log(myCircle.getColor());
console.log(myCircle.radius);
