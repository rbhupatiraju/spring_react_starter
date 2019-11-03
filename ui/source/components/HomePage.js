import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { withRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import AppMenu from './AppMenu'

const backgroundShape = require('../images/shape.svg');

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey['100'],
        overflow: 'hidden',
        background: `url(${backgroundShape}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        paddingBottom: 200
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});


class HomePage extends Component {

    render() {
        const { classes } = this.props;
        return (<React.Fragment>
        <CssBaseline />
        <AppMenu />
        <div className={classes.root}>
            <Grid container spacing={24} style={{ marginTop: '2%', marginBottom: '2%', marginRight: '2%', marginLeft: '2%' }}>
                <Grid item xs={2} sm={2}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" component="h3">
                            Create a Job
                        </Typography>
                        <Typography component="p">
                            This module is used to create calc engine jobs.<br/>
                        </Typography>
                        <Typography component="p">
                            <a href="#/createJob">Get Started</a>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3} sm={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" component="h3">
                            Calc Engine Job List
                        </Typography>
                        <Typography component="p">
                            This module is used to view/trigger the calc engine jobs already created.
                        </Typography>
                        <Typography component="p">
                            <a href="#/jobList">View/Trigger Calc Engine Job</a>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        </React.Fragment>);
    }
}

export default withRouter(withStyles(styles)(HomePage));
