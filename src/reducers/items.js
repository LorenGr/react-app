import _ from 'lodash';
import {remove, uniqueId} from 'lodash';

export default function items(state = {}, action) {
    let new_state = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "ITEM_DELETE_MODAL_SHOW" :
            new_state.modal = new_state.modal || {};
            new_state.modal.ITEM_DELETE = {
                show: true,
                id: action.id,
                name: action.name
            };
            return new_state;
        case "ITEM_DELETE_MODAL_HIDE" :
            new_state.modal.ITEM_DELETE = {
                show: false,
                id: 0,
                name: ""
            };
            return new_state;
        case "ITEM_DELETE" :
            _.remove(new_state.list,
                item => item.id === action.id
            );
            return new_state;

        case "ITEM_FETCH_LIST_SUCCESS" :
            new_state.list = action.items;
            return new_state;

        case "ITEM_ADD" :
            new_state.list.data.push({
                from: "Loren",
                bundle: "Inbox",
                date: action.date || new Date(),
                id: action.id || _.uniqueId,
                recipient: action.recipient,
                subject: action.subject
            });
            return new_state;

        case "ITEM_EDIT" :
            for (const item of new_state.list.data) {
                if (item.id === action.id) {
                    Object.assign(item, action.values);
                    break;
                }
            }
            return new_state;

        default :
            return state;
    }
}