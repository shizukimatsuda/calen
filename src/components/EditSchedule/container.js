import { connect } from "react-redux"
import AddScheduleDialog from "./presentation";
import CurrentScheduleDialog from "../CurrentScheduleDialog/presentation"
import { editscheduleCloseDialog, editScheduleValue } from "../../redux/currentSchedule/actions"
import { asyncSchedulesEditItem } from "../../redux/schedules/effects"


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
        dispatch(editscheduleCloseDialog());
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

    
export default connect(mapStateToProps, mapDispatchToProps,mergeProps)(AddScheduleDialog,CurrentScheduleDialog);