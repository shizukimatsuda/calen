import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import Schedule from "../Schedule"
import CalendarElement from "../CalendarElement"


const ScheduleListDialog = ({ schedule: { isListOpen, itemlist }, isListClose, list }) => {


  let keys = Object.keys(itemlist)
  for(let i = 0; i < keys.length; i++) {
    let title = keys[i]
    let list = itemlist[title]
    console.log(list) 
  }
  

  return (
    <Dialog open={isListOpen} onClose={isListClose} maxWidth="xs" fullWidth>
      <DialogContent>
        {/* {list.map(({ title, schedules }) => (
          <li>
                <Schedule key={e.id} schedule={e} {...props} />
          </li>
        ))}; */}
      </DialogContent>
    </Dialog >
  );
};

export default ScheduleListDialog;