/* app.js */
const { circleArea, squareArea} = require('./shape-area.js');

const converters = { circleArea, squareArea };

const raio = process.argv[2];
const lado = process.argv[3];

const areaRaio = converters.circleArea(raio);
const areaLado = converters.squareArea(lado);

console.log(`A área do raio de um circulo ${raio} é ${areaRaio.toFixed(2)}`);
console.log(`A área do lado de um quadrado ${lado} é ${areaLado.toFixed(2)}`);
