import { useEffect, useState } from 'react';

function format(date) {
  return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
}

/** Live "9:41"-style clock that ticks every 15 seconds, matching the original. */
export function useClock() {
  const [time, setTime] = useState(() => format(new Date()));

  useEffect(() => {
    const tick = () => setTime(format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  return time;
}
