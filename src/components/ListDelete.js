import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import {connect} from 'react-redux';

export class ListDelete extends React.Component {

    constructor(props) {
        super(props);
        this.modalHide = this.modalHide.bind(this);
        this.emailDelete = this.emailDelete.bind(this);
    }

    render() {
        return (
            <Modal show={this.props.modal_delete.show}>
                <Modal.Header>
                    <Modal.Title>
                        Are you sure you want to delete &nbsp;
                        <strong>{this.props.modal_delete.name}</strong>?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={this.modalHide}>No</Button>
                    <Button onClick={this.emailDelete} bsStyle="primary">Yes</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    emailDelete(event) {
        this.props.dispatch({
            type : "ITEM_DELETE",
            id : this.props.modal_delete.id
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