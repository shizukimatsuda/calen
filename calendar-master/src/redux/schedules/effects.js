import { schedulesSetLoading, schedulesFetchItem, schedulesAddItem } from "./actions";
import { get, post } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
    dispatch(schedulesSetLoading());

    const result = await get(`schedules?month=${month}&year=${year}`);
    const list = JSON.parse(result)

    const formatedSchedule = list.map(r => formatSchedule(r));

    dispatch(schedulesFetchItem(formatedSchedule));
};

export const asyncSchedulesAddItem = schedule => async dispatch => {
    // loading: true にする
    dispatch(schedulesSetLoading());

    const body = { ...schedule, date: schedule.date.toISOString() };
    const result = await post("Addschedule", body);

    const newSchedule = formatSchedule(result);
    dispatch(schedulesAddItem(newSchedule));
};