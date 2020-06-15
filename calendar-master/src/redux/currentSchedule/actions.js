// constants
export const CURRENT_SCHEDULE_SET_ITEM = "CURRENT_SCHEDULE_SET_ITEM";
export const CURRENT_SCHEDULE_OPEN_DIALOG = "CURRENT_SCHEDULE_OPEN_DIALOG";
export const CURRENT_SCHEDULE_CLOSE_DIALOG = "CURRENT_SCHEDULE_CLOSE_DIALOG";
export const CURRENT_SCHEDULE_EDIT_DIALOG = "CURRENT_SCHEDULE_EDIT_DIALOG"
export const EDIT_SCHEDULE_CLOSE_DIALOG = "EDIT_SCHEDULE_CLOSE_DIALOG"
export const CURRENT_SCHEDULE_EDIT_ITEM = "CURRENT_SCHEDULE_EDIT_ITEM"

// actions
export const currentScheduleSetItem = payload => ({
  type: CURRENT_SCHEDULE_SET_ITEM,
  payload
});

export const currentScheduleOpenDialog = () => ({
  type: CURRENT_SCHEDULE_OPEN_DIALOG
});

export const currentScheduleCloseDialog = () => ({
  type: CURRENT_SCHEDULE_CLOSE_DIALOG
});

export const currentScheduleEditDialog = () => ({
  type: CURRENT_SCHEDULE_EDIT_DIALOG
});

export const editscheduleCloseDialog = () => ({
  type: EDIT_SCHEDULE_CLOSE_DIALOG
})

export const currentScheduleEditItem = payload => ({
  type: CURRENT_SCHEDULE_EDIT_ITEM,
  payload
})