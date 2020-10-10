import React from 'react'
import { Typography, makeStyles, Paper, Grid } from '@material-ui/core/'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
        maxWidth: '400px',
        margin: 'auto'
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        justifyContent: 'center',
        width: '100%',
    },
}));
export default function Breackdown(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {props.catagory.map((c, index) =>
                    <Grid item xl={12} xs={12} container key={index}>
                        <Paper className={classes.paper} style={{ backgroundColor: c.total <= 0 ? 'crimson' : 'limegreen' }}  >
                            <Grid item xs={12}>
                                <Typography className={classes.typography} variant='subtitle1'>Catagory: {c._id}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.typography} variant='subtitle1'>Total Spend: {c.total}</Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}
