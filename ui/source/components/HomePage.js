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
            Hello World
        </div>
        </React.Fragment>);
    }
}

export default withRouter(withStyles(styles)(HomePage));
