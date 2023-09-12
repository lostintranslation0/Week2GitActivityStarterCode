import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
console.log(`result_add = ${result_add}`);

const result_sub = calc.subtract(7, 4);
console.log(`result_sub = ${result_sub}`);

const result_mult = calc.multiply(5, 4);
console.log(`result_mult = ${result_mult}`);

