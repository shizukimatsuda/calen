import React from "react";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSameDay, getMonth } from "../../services/calendar"
import Schedule from "../Schedule";

const CalendarElement = ({ day, month, schedules, ...props }) => {

  // 今月以外をグレーダウン
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  // 文字列のフォーマットをどうするか
  // 月の最初だけ月情報をつける
  const format = isFirstDay(day) ? "M月D日" : "D";

  // 当日かどうか判断
  const today = dayjs();
  const isToday = isSameDay(day, today);

  return (
    <div className="element">
      <style jsx global>{`
          .element {
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            height: 18vh;
          }
          .date {
            padding: 5px 0;
            height: 24px;
          }
          .today {
            display: inline-block;
            line-height: 24px;
            width: 24px;
            background-color: #1a73e8;
            color: #fff;
            border-radius: 50%;
          }
          .schedules {
            overflow: auto;
            height: calc(18vh - 40px);
          }
          `}</style>
      <Typography
        className="date"
        align="center"
        color={textColor}
        variant="caption"
        component="div"
      >
        <span className={isToday ? "today" : ""}>
          {day.format(format)}
        </span>
      </Typography>
      <div className="schedules">
        {schedules.map(e => (
          <Schedule key={e.id} schedule={e} {...props} />
        ))}
      </div>
    </div>
  );
};

export default CalendarElement;