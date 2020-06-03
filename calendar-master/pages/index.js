import "@babel/polyfill"
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import calendarReducer from "../src/redux/calendar/reducer"
import addScheduleReducer from "../src/redux/addSchedule/reducer"
import schedulesReducer from "../src/redux/schedules/reducer"
import currentScheduleReducer from "../src/redux/currentSchedule/reducer"
import CalendarBoard from '../src/components/CalendarBoard/container'
import Navigation from "../src/components/Navigation/container";
import AddScheduleDialog from "../src/components/AddScheduleDialog/container";
import CurrentScheduleDialog from "../src/components/CurrentScheduleDialog/container"
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
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
});


const store = createStore(rootReducer,applyMiddleware(thunk))


const Index = () => (
    <div>
        <Provider store={store}>
            <MuiPickersUtilsProvider utils={DayjsUtils}>
                <Navigation />
                <CalendarBoard />
                <AddScheduleDialog />
                <CurrentScheduleDialog />
            </MuiPickersUtilsProvider>
        </Provider>
    </div>
)

export default Index