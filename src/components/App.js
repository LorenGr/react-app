import React from 'react';
import AppToolbar from './AppToolbar';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <AppToolbar className="toolbar" />
                <div className="data-grid">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
