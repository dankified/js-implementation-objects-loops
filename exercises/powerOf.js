function powerOf(numberArray, power) {
  return numberArray.map(num => num ** power);
}


module.exports = {
	powerOf: (...args) => powerOf(...args)
}