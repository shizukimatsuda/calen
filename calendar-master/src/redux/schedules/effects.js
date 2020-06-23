import { schedulesSetLoading, schedulesFetchItem, schedulesAddItem, schedulesDeleteItem } from "./actions";
import { get, post, deleteRequest, editRequest } from "../../services/api";
import { formatSchedule } from "../../services/schedule";
import { ShortTextOutlined, SpeakerNotesOutlined } from "@material-ui/icons";

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

    const getUniqueStr = (myStrong) => {
        let strong = 1000;
        if (myStrong) strong = myStrong;
        return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
    }

    let uuid = getUniqueStr()


    const body = {
        ...schedule, date: schedule.date.toISOString(),
        id: uuid
    };
    const result = await post("Addschedule", body);

    const newSchedule = formatSchedule(result);
    dispatch(schedulesAddItem(newSchedule));
};

export const asyncSchedulesDeleteItem = id => async (dispatch, getState) => {
    dispatch(schedulesSetLoading());
    const currentSchedules = getState().schedules.items;

    const body = { "id": id }
  
    await deleteRequest(`DeleteSchedules`, body);
  
    // 成功したらローカルのstateを削除
    const newSchedules = currentSchedules.filter(s => s.id !== id);
    dispatch(schedulesDeleteItem(newSchedules));
};

export const asyncSchedulesEditItem = schedule => async (dispatch, getState) => {
    dispatch(schedulesSetLoading());
    
    const currentSchedules = getState().schedules.items;
    
    let editid = schedule.id

    const newSchedules = currentSchedules.filter(s => s.id !== editid);

    dispatch(schedulesDeleteItem(newSchedules));

    const body = {
        ...schedule, date: schedule.date.toISOString()
    };

    const result = await editRequest("EditSchedule", body);

    const newSchedule = formatSchedule(result);
    dispatch(schedulesAddItem(newSchedule));
}