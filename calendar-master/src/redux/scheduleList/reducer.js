import {
    SCHEDULE_LIST_OPEN_DIALOG,
    SCHEDULE_LIST_CLOSE_DIALOG,
    SCHEDULE_LIST_SET_ITEM,
} from "./actions"

const init = {
    isListOpen: false,
    itemlist:[{
        id: "",
        title: "",
        radio: "",
        date:"",
        location: ""
    }]
}


const scheduleListReducer = (state = init, action) => {
    const { type, payload } = action
    
    switch (type) {
        case SCHEDULE_LIST_OPEN_DIALOG:
            return { ...state, isListOpen: true}
        case SCHEDULE_LIST_CLOSE_DIALOG:
            return init
            case SCHEDULE_LIST_SET_ITEM:
                return { ...state, itemlist: payload };
        default:
            return state;
    }
}

export default scheduleListReducer