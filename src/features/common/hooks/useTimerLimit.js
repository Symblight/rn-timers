import {useRef, useCallback, useState} from 'react';
import BackgroundTimer from 'react-native-background-timer';

export const useTimerLimit = (interval = 15000) => {
  const [can, setToggle] = useState(false);
  let timer = useRef(null);

  const start = useCallback(() => {
    if (!timer.current) {
      timer.current = BackgroundTimer.setTimeout(
        () => setToggle(true),
        interval,
      );
    }
  }, [interval]);

  const stop = useCallback(() => {
    BackgroundTimer.clearTimeout(timer.current);
    timer.current = null;
    setToggle(false);
  }, []);

  return [start, stop, can];
};
