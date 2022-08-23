import { Component } from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

class ExpenseItem extends Component {
	render() {
		return (
			<div className='expense-item'>
				<ExpenseDate date={this.props.date} />
				<h2>{this.props.text}</h2>
				<div className='expens-item__description'>
					<div className='expense-item__price'>
						{this.props.amount}$
					</div>
				</div>
			</div>
		)
	}
}

export default ExpenseItem
