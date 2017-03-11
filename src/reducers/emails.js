export default function emails(state = {}, action) {
    let new_state;

    switch (action.type) {
        case "EMAIL_DELETE_MODAL_SHOW" :
            new_state = JSON.parse(JSON.stringify(state));
            new_state.modal = new_state.modal || {};
            new_state.modal.EMAIL_DELETE = {
                show: true,
                id: action.id,
                name: action.name
            };
            return new_state;
        case "EMAIL_DELETE_MODAL_HIDE" :
            new_state = JSON.parse(JSON.stringify(state));
            new_state.modal.EMAIL_DELETE = {
                show: false,
                id: 0,
                name: ""
            };
            return new_state;
        default :
            return state;
    }
}