import React from 'react';
import AppToolbar from './AppToolbar';

import {RouteTransition} from 'react-router-transition';
import spring from 'react-motion/lib/spring';

import {withStyles, createStyleSheet} from 'material-ui/styles';

const styleSheet = createStyleSheet('AppStructure', theme => ({
    container: {
        paddingTop: theme.spacing.unit * 8,
    },
    [theme.breakpoints.down('sm') ]: {
        container: {
            paddingTop: theme.spacing.unit * 7,
        },
    }
}));

export class AppStructure extends React.Component {

    render() {
        const fadeConfig = {stiffness: 200, damping: 22};
        const slideConfig = {stiffness: 330, damping: 30};
        const classes = this.props.classes;

        return (
            <div className="container">
                <AppToolbar className="toolbar"/>
                <div id="contentContainer" className={classes.container}>

                    <RouteTransition
                        pathname={this.props.location.pathname}
                        atEnter={{
                            opacity: 0,
                            offset: 100
                        }}
                        atLeave={{
                            opacity: spring(0, fadeConfig),
                            offset: spring(-100, slideConfig),
                        }}
                        atActive={{
                            opacity: spring(1, slideConfig),
                            offset: spring(0, slideConfig),
                        }}
                        mapStyles={styles => (
                            {
                                opacity: styles.opacity,
                                transform: `translateX(${styles.offset}%)`,
                            }
                        )}
                    >
                        {this.props.children}
                    </RouteTransition>
                </div>
            </div>
        );
    }
}

export default withStyles(styleSheet)(AppStructure);