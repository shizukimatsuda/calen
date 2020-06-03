import React, { useEffect } from "react";
import { GridList, Typography } from "@material-ui/core";
import CalendarElement from "../CalendarElement";

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = ({ calendar, month, openAddScheduleDialog, openCurrentScheduleDialog, fetchSchedule }) => {

    useEffect(() => {
        // 初回のみdataを取得する
        fetchSchedule();
    }, []);

    return (
        <div className="container">
            <style jsx global>{`
            .container {
                height: 90vh;
              }
              .grid {
                border-left: 1px solid #ccc;
                border-top: 1px solid #ccc;
              }
              .days {
                border-right: 1px solid #ccc;
                padding-top: 10px;
              }
            `}</style>
            <GridList className="grid" cols={7} spacing={0} cellHeight="auto">
                {days.map(d => (
                    <li key={d}>
                        <Typography
                            className="days"
                            color="textSecondary"
                            align="center"
                            variant="caption"
                            component="div"
                        >
                            {d}
                        </Typography>
                    </li>
                ))};
                {calendar.map(({ date, schedules }) => (
                    <li
                        key={date.toISOString()}
                        onClick={() => openAddScheduleDialog(date)}
                    >
                        <CalendarElement
                            day={date}
                            month={month}
                            schedules={schedules}
                            onClickSchedule={openCurrentScheduleDialog}
                        />
                    </li>
                ))};
            </GridList>
        </div>
    );
};

export default CalendarBoard;