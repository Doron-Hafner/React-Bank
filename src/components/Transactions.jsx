import React, { Component } from 'react'
import Transaction from './Transaction'

export default class Transactions extends Component {
    render() {
        return (
            this.props.transactions.map((t,index) => <Transaction transaction={t} key={index} deleteTransaction={this.props.deleteTransaction} />)
        )
    }
}
