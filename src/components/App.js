import React from 'react';
import AppToolbar from './AppToolbar';

import {MuiThemeProvider} from 'material-ui/styles';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <AppToolbar className="toolbar"/>
                    <div className="data-grid">
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
