import React from 'react';
import {connect} from 'react-redux';

export class ListDelete extends React.Component {

    constructor(props) {
        super(props);
        this.modalHide = this.modalHide.bind(this);
        this.emailDelete = this.emailDelete.bind(this);
    }

    render() {
        return (

            <div show={this.props.modal_delete.show}>
                Are you sure you want to delete &nbsp;
                <Button onClick={this.modalHide}>No</Button>
                <Button onClick={this.emailDelete} bsStyle="primary">Yes</Button>
            </div>
        );
    }

    emailDelete(event) {
        this.props.dispatch({
            type: "ITEM_DELETE",
            id: this.props.modal_delete.id
        });
        this.props.dispatch({
            type: "ITEM_DELETE_MODAL_HIDE"
        });
    }

    modalHide(event) {
        this.props.dispatch({
            type: "ITEM_DELETE_MODAL_HIDE"
        });
    }
}

function mapStateToProps(state) {
    let modal_delete;

    if (state.items.modal && state.items.modal.ITEM_DELETE) {
        modal_delete = state.items.modal.ITEM_DELETE;
    } else {
        modal_delete = {
            show: false,
            id: 0,
            name: ''
        }
    }
    return ({
        modal_delete: modal_delete
    });
}

export default connect(mapStateToProps)(ListDelete);