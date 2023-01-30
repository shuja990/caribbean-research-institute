import React from "react";
import {
  Calendar,
  momentLocalizer,
  dateFnsLocalizer,
  Navigate,
} from "react-big-calendar";
import moment from "moment";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

const EventsCalendar = () => {
  const locales = {
    "en-US": enUS,
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const events = [
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Caribbean Research Institute",
    },
  ];
  return (
    <div className="big-calender">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default EventsCalendar;
