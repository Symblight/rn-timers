import {useRef, useCallback} from 'react';
import BackgroundTimer from 'react-native-background-timer';

export const useTimerUpdate = () => {
  let timer = useRef(null);

  const start = useCallback((callback, interval = 10000) => {
    if (!timer.current) {
      timer.current = BackgroundTimer.setInterval(callback, interval);
    }
  }, []);

  const stop = useCallback(() => {
    BackgroundTimer.clearInterval(timer.current);
    timer.current = null;
  }, []);

  return [start, stop];
};
