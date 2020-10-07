import './App.css';
import axios from 'axios'

import React, { Component } from 'react'
import Transactions from './components/Transactions';
import Operations from './components/Operations';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      transactions:
      [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ]
    }
  }
  getBalance(){
    let sumAmount = 0
    this.state.transactions.forEach(t => sumAmount += t.amount)
    return <div className='total-balance' >{sumAmount}</div>
  }
  addTransaction = (transaction) => {
    const transactions = [...this.state.transactions]
    transactions.push(transaction)
      this.setState({ transactions: transactions })
  }
  deleteTransaction = (transactionId) => {
    const transactions = [...this.state.transactions]
    transactions.splice(transactionId, 1)
    this.setState({ transactions: transactions })
  }
  render() {
    return (
      <div>
        {this.getBalance()}
        {<Transactions transactions={this.state.transactions} deleteTransaction={this.deleteTransaction} />}
        {<Operations transactions={this.state.transactions} addTransaction={this.addTransaction} />}
      </div>
    )
  }
}
