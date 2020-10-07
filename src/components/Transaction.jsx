import React, { Component } from 'react'

export default class Transaction extends Component {
    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.key)
    }
    render() {
        return (
            <div className='transaction'>
                amount: {this.props.transaction.amount} 
                vendor:{this.props.transaction.vendor}
                catagory: {this.props.transaction.catagory}
                <span onClick={this.deleteTransaction} >delete</span>
            </div>
        )
    }
}
