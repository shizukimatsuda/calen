import { connect } from "react-redux"
import AddScheduleDialog from "./presentation";
import CurrentScheduleDialog from "../CurrentScheduleDialog/presentation"
import { editscheduleCloseDialog, editScheduleValue } from "../../redux/currentSchedule/actions"
import { scheduleListCloseDialog } from "../../redux/scheduleList/actions"
import { asyncSchedulesEditItem } from "../../redux/schedules/effects"
import { addScheduleCloseDialog } from "../../redux/addSchedule/actions"


const mapStateToProps = state => ({ schedule: state.currentSchedule });

const mapDispatchToProps = dispatch => ({
  closeEditDialog: () => {
    dispatch(editscheduleCloseDialog());
  },

  setSchedule: value => {
    dispatch(editScheduleValue(value))
  },

  saveSchedule: schedule => {
    dispatch(asyncSchedulesEditItem(schedule));
    dispatch(scheduleListCloseDialog(false));
    dispatch(editscheduleCloseDialog());
    dispatch(addScheduleCloseDialog(false))
  },
})

const mergeProps = (stateProps, dispatchProps) => {
  const {
    schedule: { newitem: schedule }
  } = stateProps;
  const { saveSchedule, closeDialog } = dispatchProps;

  return {
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
      saveSchedule(schedule);
    },
    closeDialog: () => {
      if (isCloseDialog(schedule)) {
        closeDialog();
      }
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddScheduleDialog, CurrentScheduleDialog);