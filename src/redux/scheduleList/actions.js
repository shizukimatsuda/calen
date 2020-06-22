export const SCHEDULE_LIST_OPEN_DIALOG = "SCHEDULE_LIST_OPEN_DIALOG"
export const SCHEDULE_LIST_CLOSE_DIALOG = "SCHEDULE_LIST_CLOSE_DIALOG"
export const SCHEDULE_LIST_SET_ITEM = "SCHEDULE_LIST_SET_ITEM"

export const scheduleListOpenDialog = () => ({
    type: SCHEDULE_LIST_OPEN_DIALOG
})

export const scheduleListCloseDialog = () => ({
    type: SCHEDULE_LIST_CLOSE_DIALOG
})

export const scheduleListSetItem = payload => ({
    type: SCHEDULE_LIST_SET_ITEM,
    payload
  });