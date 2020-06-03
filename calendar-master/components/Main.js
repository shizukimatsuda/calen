import dayjs from "dayjs";


// ----- initial state --- 

export const initialState = {
    // date: "2020年3月"
};

// ---- type ----- 

export const types = {
    // CHANGE_UNIVERSE: 'CHANGE_UNIVERSE',

};



// ---- action ----- 

export const actions = {

// actions

}



// ---- reducer ----- 
const day = dayjs();

const init = {
  year: day.year(),
  month: day.month() + 1
};

export const calendarReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case CALENDAR_SET_MONTH:
      return payload;
    default:
      return state;
  }
};
