import React from 'react';
import EmailList from '../components/EmailList';

export default class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <EmailList/>
            </div>
        );
    }
}
