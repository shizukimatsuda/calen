import AddScheduleDialog from "./presentation";
import { addScheduleCloseDialog, addScheduleSetValue, addScheduleStartEdit } from "../../redux/addSchedule/actions";
import { connect } from "react-redux";
import { isCloseDialog } from "../../services/schedule";
import { asyncSchedulesAddItem } from "../../redux/schedules/effects";

const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(addScheduleCloseDialog(false));
    },

    setSchedule: value => {
        dispatch(addScheduleSetValue(value));
    },

    saveSchedule: schedule => {
        dispatch(asyncSchedulesAddItem(schedule));
        dispatch(addScheduleCloseDialog());
    },

    setIsEditStart: () => {
        dispatch(addScheduleStartEdit());
    },
});

const mergeProps = (stateProps, dispatchProps) => {
    const {
      schedule: { form: schedule }
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


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddScheduleDialog);