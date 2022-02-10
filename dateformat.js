function formatDate(date) {
    var d = date
      month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
    
      if (month.length < 2)
          month = '0' + month;
      if (day.length < 2)
          day = '0' + day;
  return [year, month, day].join('-');
      // return [day, month, year].join('-');
    }
    module.exports = formatDate;