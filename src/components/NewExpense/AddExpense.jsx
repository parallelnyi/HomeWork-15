import ExpenseForm from './ExpenseForm'
import './AddExpense.css'
import { Component } from 'react'

class AddExpense extends Component {
    constructor(props){
		super(props)
	}

	saveDataFormHandler = (formData) => {
		
		let incertKeyFormData = {
			...formData,
			id: Math.random().toString(),
		}
	
		this.props.onSaveDataToArray(incertKeyFormData)
	}
	render() {
		return (
			<div className='new-expense'>
				<ExpenseForm onSaveData={this.saveDataFormHandler} />
			</div>
		)
	}
}

export default AddExpense
