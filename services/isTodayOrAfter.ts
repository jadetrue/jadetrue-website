import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrAfter);


export const isTodayOrAfter = (date: Date): boolean => {
    const today = new Date();
  
    if (formatDate(today) === formatDate(date)) return true;
    return dayjs(date).isSameOrAfter(today);
  };
  
  export const formatDate = (date: Date): string => {
    return dayjs(date).format("DD/MM/YYYY");
  };
  