import React from 'react';
import AppToolbar from './AppToolbar';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <AppToolbar/>
                </div>
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
