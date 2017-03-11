import React from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';

import EmailListItem from './EmailListItem';
import EmailListDelete from './EmailListDelete';

class EmailList extends React.Component {
    render() {
        return (
            <div>
                <EmailListDelete/>
                <Table bordered hover responsive striped>
                    <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>Bundle</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.emails.map((email, index) => {
                        return (
                            <EmailListItem key={email.id} item={email}/>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        emails: state.emails.list
    });
}


export default connect(mapStateToProps)(EmailList);
