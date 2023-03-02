const months = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

const stringify = (input: number | string): string =>
  typeof input == "number" ? input.toString() : input;

const check = (text: string): string => (text == null ? "Not Available" : text);

const formatDate = (date: string): string[] => {
  const converted = new Date(date);

  return [
    "Joined",
    converted.getDate(),
    months[(converted.getMonth() + 1) as keyof typeof months],
    converted.getFullYear(),
  ].map(stringify);
};

const formatNumber = (num: number): string => num.toLocaleString();

export { formatDate, formatNumber, check };
