import moment from "moment";

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const parseTimestamptzToDateString = (timestamptz) => {
  return moment(timestamptz).format("DD MMMM yyyy");
};
