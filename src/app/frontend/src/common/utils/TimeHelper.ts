import moment from 'moment';

function toLocalISOString(date: Date) {
  const timezoneOffset = date.getTimezoneOffset();

  return new Date(date.getTime() - timezoneOffset * 60000).toISOString();
}

const formatDate = (date: string, format?: string) => {
  if (!format) {
    return moment(date).format('DD/MM/YYYY');
  }
  return moment(date).format(format);
};

const formatTime = (date: string, format?: string) => {
  if (!format) {
    return moment(date).format('DD/MM/YYYY - HH:mm');
  }
  return moment(date).format(format);
};

/**
 * 
 * @param duration length of duration in minutes
 * @returns a string contains formated duration in days, hours and minutes
 */
const formatDuration = (duration: number): string => {
  const dayLocal = 'ngày';
  const hourLocal = 'giờ';
  const minuteLocal = 'phút';

  duration = Math.floor(duration);
  let days = 0;
  let hours = 0;
  let minutes = duration;
  let result = '';
  if (Math.floor(duration / (1 * 24 * 60)) >= 1) {
    days = Math.floor(duration / (1 * 24 * 60));
    duration = duration -  days * 24 * 60;
    if (days > 0)
      result += `${days} ${dayLocal}`;
  }
  if (Math.floor(duration / 1 * 60) >= 1) {
    days = Math.floor(duration / (1 * 60));
    duration = duration - days * 60;
    minutes = duration;
    if (days > 0 || (days === 0 && hours > 0))
      result += ` ${hours} ${hourLocal}`;
  }
  return result.length > 0 ? `${result} ${minutes} ${minuteLocal}` : `${minutes} ${minuteLocal}`;
};

export {
  formatDate, 
  formatTime, 
  formatDuration, 
  toLocalISOString
};
