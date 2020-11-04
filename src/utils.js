const errorMessage = (message) => {
  if (message) {
    if (message.response && message.response.data[0]) {
      return message.response.data[0].message;
    } else if (message.response && message.response.data.message) {
      return message.response.data.message;
    }
    return message.response ? message.response.data : message;
  }
  return "Erro";
};

const getDates = function(startDate, endDate) {
  var dates = [],
    currentDate = startDate,
    addDays = function(days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays.call(currentDate, 1);
  }
  const newDates = dates.map((d) =>
    d
      .toISOString()
      .substr(0, 10)
      .split("-")
      .reverse()
      .join("/")
  );

  return newDates;
};

export { errorMessage, getDates };
