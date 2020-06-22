import React from "react";

const Schedule = ({ schedule, onClickSchedule }) => {
    return (
        <div
            className="schedule"
            onClick={e => onClickSchedule(schedule, e)}
        >
            <style jsx global>{`
            .schedule {
                width: 90%;
                background-color: rgb(121, 134, 203);
                color: #fff;
                border-radius: 4px;
                font-size: 14px;
                padding: 1px 4px;
                margin: 1px 0;
                cursor: pointer;
              }
            `}</style>
            {schedule.title}
        </div>
    )
};

export default Schedule;