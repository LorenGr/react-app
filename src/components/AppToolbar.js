import React from 'react';
import {Nav, NavItem, Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router';

export default class AppToolbar extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Home </Link>
                <Link to="/email-edit">
                    Create Email <Glyphicon glyph="plus-sign"/>
                </Link>
            </div>
        );
    }
};