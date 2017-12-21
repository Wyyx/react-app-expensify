// index.html imports firebase

const database = firebase.database()
export { firebase, database as default }

// database.ref('expenses').push({
// 	description: 'movie',
// 	amount: 40,
// 	note: '',
// 	createdAt: 46871857
// })
// database.ref('expenses').push({
// 	description: 'food',
// 	amount: 23,
// 	note: '',
// 	createdAt: 56238897
// })

// database.ref('expenses').push({
// 	description: 'rent',
// 	amount: 530,
// 	note: '',
// 	createdAt: 89365588
// })

// database.ref('expenses').once('value').then((snapshot) => {
// 	const expenses = []
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		})
// 	})

// 	console.log(expenses)
// })

// database.ref('users').set({
// 	name: 'Wyyx',
// 	age: 26,
// 	location: {
// 		city: 'ChengDu',
// 		country: 'China'
// 	}
// })
