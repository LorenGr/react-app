import _ from 'lodash';
import {remove} from 'lodash';

export default function emails(state = {}, action) {
    let new_state = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "EMAIL_DELETE_MODAL_SHOW" :
            new_state.modal = new_state.modal || {};
            new_state.modal.EMAIL_DELETE = {
                show: true,
                id: action.id,
                name: action.name
            };
            return new_state;
        case "EMAIL_DELETE_MODAL_HIDE" :
            new_state.modal.EMAIL_DELETE = {
                show: false,
                id: 0,
                name: ""
            };
            return new_state;
        case "EMAIL_DELETE" :
            _.remove(new_state.list,
                item => item.id === action.id
            );
            return new_state;

        default :
            return state;
    }
}