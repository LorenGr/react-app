import React from 'react';
import AppToolbar from './AppToolbar';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <AppToolbar/>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
