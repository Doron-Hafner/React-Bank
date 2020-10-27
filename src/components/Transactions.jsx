import React from 'react'
import Transaction from './Transaction.jsx'
import { makeStyles, Grid } from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
        maxWidth: '400px',
        margin: 'auto'
    },
}));

export default function Transactions(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction='column'>
                {props.transactions.map(t => <Transaction transaction={t} key={t._id} deleteTransaction={props.deleteTransaction} />)}
            </Grid>
        </div>
    )
}

