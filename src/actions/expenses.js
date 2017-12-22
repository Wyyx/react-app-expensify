import uuid from 'uuid'
import database from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = (expense) => ({
	type: 'ADD_EXPENSE',
	expense
})

export const startAddExpense = (expense = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid
		return database
			.ref(`users/${uid}/expenses`)
			.push(expense)
			.then((ref) => {
				dispatch(
					addExpense({
						id: ref.key,
						...expense
					})
				)
			})
	}
}

// REMOVE_EXPENSE
export const removeExpense = (id) => ({
	type: 'REMOVE_EXPENSE',
	id
})

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
})

// SET_EXPENSES
export const setExpenses = (expenses) => ({
	type: 'SET_EXPENSES',
	expenses
})

export const startSetExpenses = () => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid
		return database
			.ref(`users/${uid}/expenses`)
			.once('value')
			.then((snapshot) => {
				const expenses = []

				snapshot.forEach((childSnapshot) => {
					expenses.push({
						id: childSnapshot.key,
						...childSnapshot.val()
					})
				})

				dispatch(setExpenses(expenses))
			})
	}
}

export const startEditExpense = (id, expense) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid
		return database
			.ref(`users/${uid}/expenses/${id}`)
			.update({ ...expense })
			.then((snapshot) => {
				dispatch(editExpense(id, expense))
			})
	}
}

export const startRemoveExpense = (id) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid
		return database
			.ref(`users/${uid}/expenses/${id}`)
			.remove()
			.then(function() {
				dispatch(removeExpense(id))
			})
	}
}
