const person = {
	name: 'Wyyx',
	age: 26
}

const { name: firstName, age, skill = 'scala' } = person

console.log(firstName, age, skill)

const address = [ 'China', 'Beijing', 'Henan' ]

const [ , , province ] = address
console.log(province)
