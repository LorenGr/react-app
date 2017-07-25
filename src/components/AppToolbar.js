import React from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import AssignmentIndIcon from 'material-ui-icons/AssignmentInd';
import PersonAddIcon from 'material-ui-icons/PersonAdd';
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

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.bar}>
                    <Toolbar>

                        <IconButton color="contrast" aria-label="Menu">
                            <AssignmentIndIcon/>
                        </IconButton>

                        <Typography color="inherit" type="title" className={classes.flex}>
                            My Contacts
                        </Typography>

                        <Link to={'edit'}>
                            <IconButton color="contrast" aria-label="Menu">
                                <PersonAddIcon/>
                            </IconButton>
                        </Link>


                    </Toolbar>
                </AppBar>
            </div>
        );
    }
};

export default withStyles(styleSheet)(AppToolbar);