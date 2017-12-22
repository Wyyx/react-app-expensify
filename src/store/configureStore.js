import { createStore, combineReducers, applyMiddleware } from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import authReducer from '../reducers/auth'
import thunk from 'redux-thunk'

// Store creation

export default () => {
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer,
			auth: authReducer
		}),
		applyMiddleware(thunk)
	)

	return store
}
