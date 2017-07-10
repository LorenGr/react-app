import React from 'react';
import {connect} from 'react-redux';
import {Table, Pagination, ProgressBar} from 'react-bootstrap';

import EmailListItem from './EmailListItem';
import EmailListDelete from './EmailListDelete';

import {push} from 'react-router-redux';

class EmailList extends React.Component {

    constructor(props) {
        super(props);

        if (!this.props.emails.length) {
            this.props.dispatch({
                type: 'EMAILS_FETCH_LIST'
            });
        }

        this.changePage = this.changePage.bind(this);
    }

    render() {

        const per_page = 5;
        const pages = Math.ceil(this.props.emails.length / per_page);
        const current_page = this.props.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;

        return this.props.emails.length ? (
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
                        if (index >= start_offset && start_count < per_page) {
                            start_count++;
                            return (
                                <EmailListItem key={email.id} item={email}/>
                            )
                        }
                    })}
                    </tbody>
                </Table>
                <Pagination className="emails-pagination pull-right"
                            bsSize="medium" maxButtons={10}
                            first last next prev boundaryLinks
                            items={pages}
                            activePage={current_page}
                            onSelect={this.changePage}/>
            </div>
        ) : (
            <ProgressBar active now={100}/>
        );
    }

    changePage(page) {
        this.props.dispatch(push('/?page=' + page));
    }
}

function mapStateToProps(state) {
    return ({
        emails: state.emails.list || [],
        page: Number(state.routing.locationBeforeTransitions.query.page) || 1
    });
}


export default connect(mapStateToProps)(EmailList);
