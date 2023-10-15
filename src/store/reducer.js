import { CHANGE_TAB, UPD_USERS } from "./actions";
import initialState from "./initialState";

const reducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case CHANGE_TAB: return {
            ...state, activeTab: payload.activeTab
        }
        case UPD_USERS: return {
            ...state, users: payload.users
        }
            
        default: return state;

    }
};
export default reducer;