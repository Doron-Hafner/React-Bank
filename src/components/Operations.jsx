import React, { Component } from 'react'

export default class Operations extends Component {
    constructor(){
        super()
        this.state = {
            amount: '',
            vendor: '',
            catagory: ''
        }
    }
    handleInput = e =>{
        const value = e.target.value,
        name = e.target.name
        this.setState({ [name]: value })
    }
    handleClick = (e) => {
        e.target.value === 'withdraw' ?
            this.setState({amount: Number(this.state.amount*(-1))},
            () => this.props.addTransaction(this.state))
            : this.props.addTransaction(this.state)
        // this.setState({
        //     amount: '',
        //     vendor: '',
        //     catagory: ''
        // })
    }
    
    render() {
        const amount = parseInt(this.state.amount) || ""
        return (
            <div>
                <input type="text" name="amount" value={amount} onChange={this.handleInput} />
                <input type="text" name="vendor" value={this.state.vendor} onChange={this.handleInput} />
                <input type="text" name="catagory" value={this.state.catagory} onChange={this.handleInput} />
                <button onClick={this.handleClick} value='deposit'>Deposit</button>
                <button onClick={this.handleClick} value='withdraw'>Withdraw</button>
            </div>
        )
    }
}
