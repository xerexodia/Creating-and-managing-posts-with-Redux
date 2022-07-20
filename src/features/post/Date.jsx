import { parseISO, formatDistanceToNow } from "date-fns";

import React from "react";

function Date({ timestamp }) {
  let time = "";
  if (timestamp) {
    // formatting the timestamp
    const date = parseISO(timestamp);
    // getting the time distance from now
    const timePeriod = formatDistanceToNow(date);
    time = `${timePeriod} ago`;
  }
  return (
    <span title={timestamp}>
      &nbsp; <i>{time}</i>
    </span>
  );
}

export default Date;
