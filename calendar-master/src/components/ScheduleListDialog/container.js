import ScheduleListDialog from "./presentation";
import { connect } from "react-redux";
import { scheduleListCloseDialog } from "../../redux/scheduleList/actions"
import { addScheduleCloseDialog } from "../../redux/addSchedule/actions"
import {
    currentScheduleSetItem,
    currentScheduleOpenDialog
} from "../../redux/currentSchedule/actions"

const mapStateToProps = state => ({
    schedule: state.scheduleList,
    schedules: state.schedules,
    calendar: state.calendar
});

const mapDispatchToProps = dispatch => ({
    isListClose: () => {
        dispatch(scheduleListCloseDialog(false))
        dispatch(addScheduleCloseDialog(false))
    },

    openCurrentScheduleDialog: (schedule, e) => {
        // 他のイベントが発火するのをキャンセル
        e.stopPropagation();

        dispatch(currentScheduleSetItem(schedule));
        dispatch(currentScheduleOpenDialog());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleListDialog);