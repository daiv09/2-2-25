import { useState, useEffect, useCallback } from "react";

export function useTimeSince(startDateString: string) {
  const [timeSince, setTimeSince] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeSince = useCallback(() => {
    const startDate = new Date(startDateString);
    const currentDate = new Date();
    const diff = currentDate.getTime() - startDate.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }, [startDateString]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeSince(calculateTimeSince());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [calculateTimeSince]);

  return timeSince;
}
