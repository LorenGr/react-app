import React from 'react';
import {connect} from 'react-redux';
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Slide from 'material-ui/transitions/Slide';

export class ListDelete extends React.Component {

    constructor(props) {
        super(props);
        this.modalHide = this.modalHide.bind(this);
        this.itemDelete = this.itemDelete.bind(this);
    }

    render() {
        return (
            <Dialog id="listDeleteContainer" open={this.props.modal_delete.show} transition={Slide} onRequestClose={this.modalHide}>
                <DialogTitle>
                    {"Delete Contact ?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to permanently delete this contact?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button id="cancelButton" onClick={this.modalHide} color="primary">
                        No
                    </Button>
                    <Button id="confirmButton" onClick={this.itemDelete} color="primary">
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    itemDelete() {
        this.props.dispatch({
            type: "ITEM_DELETE",
            id: this.props.modal_delete.id
        });
    }

    modalHide() {
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