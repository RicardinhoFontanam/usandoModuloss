/* shape-area.js */
const PI = Math.PI;

function circleArea(raio) {
		return PI * raio * raio;
	}
	module.exports.circleArea = circleArea;
	module.exports.squareArea = function(lado) {
		return lado * lado
	};