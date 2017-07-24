import React from 'react';
import {MuiThemeProvider} from 'material-ui/styles';
import AppStructure from './AppStructure';

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppStructure {...this.props} />
            </MuiThemeProvider>
        );
    }
}
