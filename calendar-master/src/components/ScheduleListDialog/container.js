import ScheduleListDialog from "./presentation";
import { connect } from "react-redux";
import { scheduleListCloseDialog } from "../../redux/scheduleList/actions"
import { addScheduleCloseDialog } from "../../redux/addSchedule/actions"

const mapStateToProps = state => ({
    schedule: state.scheduleList,
    schedules: state.schedules,
    calendar: state.calendar
});

const mapDispatchToProps = dispatch => ({
    isListClose: () => {
        dispatch(scheduleListCloseDialog(false))
        dispatch(addScheduleCloseDialog(false))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(ScheduleListDialog);