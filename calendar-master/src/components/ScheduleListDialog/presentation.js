import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import Schedule from "../Schedule"
import CalendarElement from "../CalendarElement"


const ScheduleListDialog = ({ schedule: { isListOpen, itemlist }, isListClose, openCurrentScheduleDialog }) => {

  return (
    <Dialog open={isListOpen} onClose={isListClose} maxWidth="xs" fullWidth>
      <DialogContent>
      <div className="scheduleList">
        {itemlist.map(e => (
          <li>
                <Schedule key={e.id} schedule={e} onClickSchedule={openCurrentScheduleDialog} />
          </li>
        ))}
          </div>
      </DialogContent>
    </Dialog >
  );
};

export default ScheduleListDialog;