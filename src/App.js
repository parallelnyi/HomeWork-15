import { Component } from 'react'
import './App.css'
import ExpenseItem from './components/Expenses/ExpenseItem'
import AddExpense from './components/NewExpense/AddExpense'

const expenses = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: 'e2',
		title: 'New TV',
		amount: 799.49,
		date: new Date(2021, 2, 12),
	},
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2022, 5, 12),
	},
]

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			expensesData: expenses,
		}
	}

	saveDatatoArrayHandler = (formData) => {
		console.log(formData)
		this.setState({
			expensesData: [...this.state.expensesData, formData],
		})
	}
	render() {
		return (
			<div className='app-main-block'>
				<AddExpense onSaveDataToArray={this.saveDatatoArrayHandler} />
				{this.state.expensesData.map((element) => {
					return (
						<ExpenseItem
							key={element.id}
							date={element.date}
							text={element.title}
							amount={element.amount}
						/>
					)
				})}
			</div>
		)
	}
}

export default App
