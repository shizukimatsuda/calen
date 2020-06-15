import { connect } from "react-redux"
import EditScheduleDialog from "./presentation";
import { editscheduleCloseDialog } from "../../redux/currentSchedule/actions"
import { addScheduleSetValue } from "../../redux/addSchedule/actions"


const mapStateToProps = state => ({ schedule: state.currentSchedule });

const mapDispatchToProps = dispatch => ({
    closeEditDialog: () => {
        dispatch(editscheduleCloseDialog());
    },

    setSchedule: value => {
        dispatch(addScheduleSetValue(value))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(EditScheduleDialog);