import './playground/play'
import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

// Add initial data and test
store.dispatch(addExpense({ description: 'drink', amount: 5, createdAt: 5000 }))
store.dispatch(addExpense({ description: 'movie', amount: 30, createdAt: 1280 }))
store.dispatch(addExpense({ description: 'game', amount: 10, createdAt: 16666 }))
console.log(store.getState())

const state = store.getState()

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
