import { Component } from 'react'
import './ExpenseForm.css'

class ExpenseForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			amount: '',
			date: '',
		}
	}

	titleChangeHandler = (event) => {
		this.setState({
			title: event.target.value,
		})
	}
	amountChangeHandler = (event) => {
		this.setState({
			amount: event.target.value,
		})
	}
	dateChangeHandler = (event) => {
		this.setState({
			date: event.target.value,
		})
	}

	submitHandler = (event) => {
		event.preventDefault()

		const formData = {
			title: this.state.title,
			amount: this.state.amount,
			date: new Date(this.state.date),
		}

		this.props.onSaveData(formData)

		this.setState({
			title: '',
			amount: '',
			date: '',
		})
	}

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>Title</label>
						<input
							type='text'
							value={this.title}
							onChange={this.titleChangeHandler}
						/>
					</div>
					<div className='new-expense__control'>
						<label></label>
						<input
							type='number'
							min='0.01'
							step='0.01'
							value={this.amount}
							onChange={this.amountChangeHandler}
						/>
					</div>
					<div className='new-expense__control'>
						<label>{this.date}</label>
						<input
							type='date'
							min='2021-01-01'
							max='2022-12-31'
							value={this.date}
							onChange={this.dateChangeHandler}
						/>
					</div>
				</div>
				<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
				</div>
			</form>
		)
	}
}

export default ExpenseForm
