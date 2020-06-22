import {
    CURRENT_SCHEDULE_SET_ITEM,
    CURRENT_SCHEDULE_OPEN_DIALOG,
    CURRENT_SCHEDULE_CLOSE_DIALOG,
    CURRENT_SCHEDULE_EDIT_DIALOG,
    EDIT_SCHEDULE_CLOSE_DIALOG,
    CURRENT_SCHEDULE_EDIT_ITEM,
    EDIT_SCHEDULE_SET_VALUE
} from "./actions";
import dayjs from "dayjs";

const init = {
    item: null,
    newitem: {
        id: "",
        title: "",
        radio: "",
        date: "",
        location: ""
    },
    isDialogOpen: false,
    isEditDialogOpen: false
};

const currentScheduleReducer = (state = init, action) => {
    const { type, payload } = action;

    switch (type) {
        case CURRENT_SCHEDULE_SET_ITEM:
            return { ...state, item: payload };
        case CURRENT_SCHEDULE_OPEN_DIALOG:
            return { ...state, isDialogOpen: true };
        case CURRENT_SCHEDULE_CLOSE_DIALOG:
            return { ...state, isDialogOpen: false };
        case CURRENT_SCHEDULE_EDIT_DIALOG:
            return { ...state, isEditDialogOpen: true };
        case EDIT_SCHEDULE_CLOSE_DIALOG:
            return init;
        case CURRENT_SCHEDULE_EDIT_ITEM:
            return { ...state, newitem: payload }
        case EDIT_SCHEDULE_SET_VALUE:
            return { ...state, newitem: { ...state.newitem, ...payload } }

        default:
            return state;
    }
};

export default currentScheduleReducer;