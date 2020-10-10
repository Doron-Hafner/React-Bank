import React, { Component } from 'react'
import '../App.css'
import 'fontsource-roboto';
import { TextField, Box, Button, ButtonGroup} from '@material-ui/core/'

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
        const value = e.target.value,
            name = e.target.name
        this.setState({ [name]: value })
    }
    handleClick = (e) => {
        if (this.state.amount && this.state.vendor && this.state.catagory) {
            let transaction = { ...this.state }
            if (e.target.value === 'withdraw') {
                transaction.amount = Number(transaction.amount * -1)
                this.setState({ transaction: transaction }, () => this.props.addTransaction(this.state))
            } else {
                this.props.addTransaction(this.state);
            }
        }
    }
    componentWillUnmount() {
        this.props.redirect()
    }

    render() {
        const vendor = this.state.vendor.replace(/[^a-zA-Z ]/, '')
        const catagory = this.state.catagory.replace(/[^a-zA-Z ]/, '')
        return (
            <Box marginTop={5}>
                <Box>
                    <TextField type="number" name="amount" value={this.state.amount.replace(/-/g, '')} onChange={this.handleInput} placeholder='Amount'></TextField>
                </Box>
                <Box>
                    <TextField type="text" name="vendor" value={vendor} onChange={this.handleInput} placeholder='Vendor'></TextField>
                </Box>
                <Box marginBottom={5}>
                    <TextField type="text" name="catagory" value={catagory} onChange={this.handleInput} placeholder='Catagory'></TextField>
                </Box>
                <ButtonGroup disableElevation variant="contained">
                    <Button onClick={this.handleClick} value='deposit' style={{backgroundColor:'limegreen' }}> Deposit</Button>
                    <Button onClick={this.handleClick} value='withdraw' style={{backgroundColor:'crimson' }}>Withdraw </Button>
                </ButtonGroup>
            </Box>
        )
    }
}
