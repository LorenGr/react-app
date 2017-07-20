import React from 'react';
import AppToolbar from './AppToolbar';

import {MuiThemeProvider} from 'material-ui/styles';
import spacing from 'material-ui/styles/spacing';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            paddingTop: spacing.unit * 8,
            marginTop: '25px'
        };

        return (
            <MuiThemeProvider>
                <div className="container">
                    <AppToolbar className="toolbar"/>
                    <div id="contentContainer" style={style}>
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}