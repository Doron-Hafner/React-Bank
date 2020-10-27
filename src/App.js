import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Transactions from './components/Transactions'
import TransactionManager from './components/TransactionManager'
import Operations from './components/Operations'
import Breakdown from './components/Breakdown'
import Header from './components/Header'
import 'fontsource-roboto';
import { Typography, Container } from '@material-ui/core/'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      redirect: false,
      balance: 0,
      catagoryList: [],
    }
  }
  componentDidMount = async () => {
    const transactions = await TransactionManager.getTransactions()
    const list = await TransactionManager.getCatagoryList()
    this.setState({
      transactions: transactions,
      balance: this.getBalance(transactions),
      catagoryList: list,
    })
  }

  deleteTransaction = async (id) => {
    await TransactionManager.deleteTransaction(id)
    const transactions = await TransactionManager.getTransactions()
    this.setState({
      transactions: transactions,
      balance: this.getBalance(transactions),
    })
  }

  addTransaction = async (transaction) => {
    await TransactionManager.addTransaction(transaction)
    const transactions = await TransactionManager.getTransactions()
    this.setState({
      transactions: transactions,
      redirect: true,
      balance: this.getBalance(transactions),
    })
  }

  getBalance = (transactions) => {
    let sumAmount = 0
    transactions.forEach(t => sumAmount += t.amount)
    return sumAmount
  }

  redirect = () => {
    this.setState({ redirect: false })
  }

  render() {
    return (
      <Router>
        <Header />
        <Container style={{textAlign:'center'}}> <Typography variant='h6' style={{ color: this.props.balance > 0 ? "limegreen" : "crimson" }}>Your current balance is {this.state.balance}</Typography> </Container>
        <Switch>
          <Route exact from="/transactions" render={() => <Transactions transactions={this.state.transactions} deleteTransaction={this.deleteTransaction} />} />
          <Route exact path="/operations" render={() => (this.state.redirect ? <Redirect to="/transactions" /> :
              <Operations addTransaction={this.addTransaction} redirect={this.redirect} />)} />
          <Route exact path="/breakdown" render={() => <Breakdown catagory={this.state.catagoryList} />} />
        </Switch>
        </Router>
    )
  }
}
