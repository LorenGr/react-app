import React from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';

const styleSheet = createStyleSheet('AppToolbar', {
    root: {
        width: '100%',
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
                <AppBar position="static" className="AppToolbarContainer">
                    <Toolbar>
                        <MenuIcon/>
                        <Typography type="title" color="inherit" className={classes.flex}>
                            Title
                        </Typography>
                        <Button href="/" color="contrast">Home</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
};

export default withStyles(styleSheet)(AppToolbar);