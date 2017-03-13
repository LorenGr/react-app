import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class EmailListItem extends React.Component {

    constructor(props) {
        super(props);
        this.modalDeleteShow = this.modalDeleteShow.bind(this);
    }


    render() {
        const item = this.props.item;
        return (
            <tr>
                <td>{item.from}</td>
                <td>{item.to}</td>
                <td>{item.subject}</td>
                <td>{this.dateToString(item.date)}</td>
                <td>{item.bundle}</td>
                <td>
                    <Link to={'/email-edit/' + item.id}>
                        <Button bsSize="xsmall">
                            Edit <Glyphicon glyph="edit"/>
                        </Button>
                    </Link>
                </td>
                <td>
                    <Button bsSize="xsmall"
                            onClick={this.modalDeleteShow}
                            data-id={item.id}
                            data-itemname={item.from}>
                        Delete <Glyphicon glyph="remove-circle"/>
                    </Button>
                </td>
            </tr>
        );
    }

    dateToString(date) {
        return date instanceof Date ? date.toISOString() : date;
    }

    modalDeleteShow(event) {

        const emailId = Number(event.target.dataset.id);
        const itemName = event.target.dataset.itemname;

        this.props.dispatch({
            type: "EMAIL_DELETE_MODAL_SHOW",
            id: emailId,
            name: itemName
        });
    }
}
EmailListItem.propTypes = {
    item: React.PropTypes.object.isRequired
};

export default connect()(EmailListItem);
