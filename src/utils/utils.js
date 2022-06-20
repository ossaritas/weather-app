export const calcTime = offset => {
  // create Date object for current location
  var d = new Date();

  // get UTC time in msec
  var utc = d.getTime();

  // create new Date object for different city
  // using supplied offset 10800 is for Istanbul TR
  var nd = new Date(utc + (offset - 10800) * 1000);

  // return time as a string
  return nd.toLocaleString('en-GB', {
    hour12: false,
    timeStyle: 'short',
    dateStyle: 'medium',
  });
};

// to get sunrise and sunset times
export const getTime = time => {
  const date = new Date(time * 1000);
  const timestr = date.toLocaleTimeString('en-GB', {
    hour12: false,
    timeStyle: 'short',
  });
  return timestr;
};

//To uppercase first letter of a string
export const ucfirst = str => {
  var firstLetter = str.substr(0, 1);
  return firstLetter.toUpperCase() + str.substr(1);
};

//get full date for given date spesific for details page
export const calcDay = a => {
  return new Date(a).toLocaleString('en-GB', {
    hour12: false,
    timeStyle: 'short',
    dateStyle: 'medium',
  });
};
