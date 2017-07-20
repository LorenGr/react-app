import React from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import {blue} from 'material-ui/colors';

const styleSheet = createStyleSheet('AppToolbar', {
    root: {
        width: '100%',
    },
    bar: {
        backgroundColor: blue[500]
    },
    flex: {
        flex: 1,
    },
});

class AppToolbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.bar}>
                    <Toolbar>

                        <IconButton color="contrast" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>

                        <Typography color="inherit" type="title" className={classes.flex}>
                            My Contacts
                        </Typography>


                    </Toolbar>
                </AppBar>
            </div>
        );
    }
};

export default withStyles(styleSheet)(AppToolbar);