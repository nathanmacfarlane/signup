import moment from "moment";

export const datesBetweenDates = (startDate: any, endDate: any) => {
  const dates = [];

  const currDate = startDate.startOf('day');
  const lastDate = endDate.startOf('day');

  dates.push(moment(currDate.clone().toDate()));

  while (currDate.add(1, 'days').diff(lastDate) < 0) {
    dates.push(moment(currDate.clone().toDate()));
  }

  dates.push(moment(currDate.clone().toDate()));

  return dates;
};