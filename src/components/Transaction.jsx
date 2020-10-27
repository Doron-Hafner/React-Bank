import React from 'react'
import { Typography, makeStyles, Paper, Grid, Button } from '@material-ui/core/'
import Delete from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        justifyContent: 'center',
        textAlignLast: 'start',
        width: '100%',
    },
    typography: {
    },
    delete: {
        fontSize: '2.5em',
    },
    button: {
        float: 'right',
    }
}));

export default function Transaction(props) {
    function deleteTransaction() {
        props.deleteTransaction(props.transaction._id)
    }
    const classes = useStyles();
    return (
        <Grid item xl={12} xs={12} container>
            <Paper className={classes.paper} style={{ backgroundColor: props.transaction.amount <= 0 ? 'crimson' : 'limegreen' }}  >
                <Button className={classes.button} onClick={deleteTransaction}><Delete className={classes.delete} /></Button>
                <Grid item xs={12}>
                    <Typography className={classes.typography} variant='subtitle1'>Catagory: {props.transaction.catagory}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.typography} variant='subtitle1'>Vendor: {props.transaction.vendor}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.typography} variant='subtitle1'>Amount: {props.transaction.amount}</Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}
