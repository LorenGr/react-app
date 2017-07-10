import _ from 'lodash';
import {remove, uniqueId} from 'lodash';

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

        case "EMAILS_FETCH_LIST_SUCCESS" :
            new_state.list = action.emails;
            return new_state;

        case "EMAILS_ADD" :
            new_state.list.push({
                from: "Loren",
                bundle: "Inbox",
                date: action.date || new Date(),
                id: action.id || _.uniqueId,
                recipient: action.recipient,
                subject: action.subject
            });
            return new_state;

        case "EMAILS_EDIT" :
            for (const email of new_state.list) {
                if (email.id === action.id) {
                    Object.assign(email, {
                        from: "Loren",
                        bundle: "Inbox",
                        date: action.date || new Date(),
                        recipient: action.recipient,
                        subject: action.subject
                    });
                    break;
                }
            }
            return new_state;

        default :
            return state;
    }
}