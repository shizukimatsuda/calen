import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";
import EditScheduleDialog from "../EditSchedule/presentation"

import { currentScheduleCloseDialog, currentScheduleEditDialog, currentScheduleEditItem} from "../../redux/currentSchedule/actions";
import { asyncSchedulesDeleteItem } from "../../redux/schedules/effects"

const mapStateToProps = state => ({ schedule: state.currentSchedule });

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(currentScheduleCloseDialog());
  },

  deleteItem: schedule => {
    console.log(schedule)
    dispatch(asyncSchedulesDeleteItem(schedule));
    dispatch(currentScheduleCloseDialog());
  },

  editItem: schedule => {
    dispatch(currentScheduleEditItem(schedule))
    dispatch(currentScheduleEditDialog())
  },


});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  deleteItem: () => {
    const { id } = stateProps.schedule.item;
    dispatchProps.deleteItem(id);
  },

  // editItem: () => {
  //   const { item } = stateProps.schedule;
  //   dispatchProps.editItem(item)
  //   console.log(item)
  // }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddScheduleDialog,EditScheduleDialog);