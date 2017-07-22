import React from 'react';
import AppToolbar from './AppToolbar';

import {RouteTransition} from 'react-router-transition';
import spring from 'react-motion/lib/spring';

import {MuiThemeProvider} from 'material-ui/styles';
import spacing from 'material-ui/styles/spacing';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const fadeConfig = { stiffness: 200, damping: 22 };
        const slideConfig = { stiffness: 330, damping: 30 };

        const style = {
            paddingTop: spacing.unit * 8,
        };

        return (
            <MuiThemeProvider>
                <div className="container">
                    <AppToolbar className="toolbar"/>
                    <div id="contentContainer" style={style}>

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
            </MuiThemeProvider>
        );
    }
}