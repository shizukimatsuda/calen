import "@babel/polyfill"
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import calendarReducer from "../src/redux/calendar/reducer"
import addScheduleReducer from "../src/redux/addSchedule/reducer"
import schedulesReducer from "../src/redux/schedules/reducer"
import currentScheduleReducer from "../src/redux/currentSchedule/reducer"
import scheduleListReducer from "../src/redux/scheduleList/reducer"
import CalendarBoard from '../src/components/CalendarBoard/container'
import Navigation from "../src/components/Navigation/container"
import AddScheduleDialog from "../src/components/AddScheduleDialog/container"
import EditScheduleDialog from "../src/components/EditSchedule/container"
import CurrentScheduleDialog from "../src/components/CurrentScheduleDialog/container"
import ScheduleListDialog from "../src/components/ScheduleListDialog/container"
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import dayjs from "dayjs";
import thunk from "redux-thunk";

dayjs.locale("ja");


// import DividendsSaga from '../saga'

const initialState = {
    // main: MainComponent.initialState
}
const rootReducer = combineReducers({
    calendar: calendarReducer,
    addSchedule: addScheduleReducer,
    currentSchedule: currentScheduleReducer,
    schedules: schedulesReducer,
    scheduleList: scheduleListReducer,
});


const store = createStore(rootReducer,applyMiddleware(thunk))


const Index = () => (
    <div>
        <Provider store={store}>
            <MuiPickersUtilsProvider utils={DayjsUtils}>
                <Navigation />
                <CalendarBoard />
                <AddScheduleDialog />
                <ScheduleListDialog />
                <CurrentScheduleDialog />
                <EditScheduleDialog />
            </MuiPickersUtilsProvider>
        </Provider>
    </div>
)

export default Index