import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router';

export default class AppToolbar extends React.Component {
    render() {
        return (
            <div className="AppToolbarContainer">
                <Link to="/PhotoAlbum/home">Home </Link>
                <Link to="/PhotoAlbum/email-edit">
                    Create Email <Glyphicon glyph="plus-sign"/>
                </Link>
            </div>
        );
    }
};