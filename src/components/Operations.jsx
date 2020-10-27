import React, { Component } from 'react'
import '../App.css'
import 'fontsource-roboto';
import { TextField, Box, Button, ButtonGroup } from '@material-ui/core/'

export default class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: '',
            vendor: '',
            catagory: ''
        }
    }
    handleInput = e => {
        let value = e.target.value,
            name = e.target.name
        if (name === 'amount') 
            value = Number(value)
        this.setState({ [name]: value }
        )
    }
    handleClick = e => {
        if (this.state.amount && this.state.vendor && this.state.catagory) {
            let transaction = { ...this.state }
            if (e.currentTarget.value === 'withdraw') {
                transaction.amount = transaction.amount * -1
                this.setState(transaction, () =>
                    this.props.addTransaction(this.state)
                )
            } else {
                this.props.addTransaction(this.state);
            }
        } else { alert('all fields required') }
    }
    componentWillUnmount() {
        this.props.redirect()
    }
    render() {
        return (
            <Box marginTop={5} style={{ textAlign: 'center' }}>
                <Box>
                    <TextField type="number" name="amount" value={this.state.amount} onChange={this.handleInput} placeholder='Amount'></TextField>
                </Box>
                <Box>
                    <TextField type="text" name="vendor" value={this.state.vendor} onChange={this.handleInput} placeholder='Vendor'></TextField>
                </Box>
                <Box marginBottom={5}>
                    <TextField type="text" name="catagory" value={this.state.catagory} onChange={this.handleInput} placeholder='Catagory'></TextField>
                </Box>
                <ButtonGroup disableElevation variant="contained">
                    <Button onClick={this.handleClick} value='deposit' style={{ backgroundColor: 'limegreen' }}> Deposit</Button>
                    <Button onClick={this.handleClick} value='withdraw' style={{ backgroundColor: 'crimson' }}>Withdraw </Button>
                </ButtonGroup>
            </Box>
        )
    }
}
