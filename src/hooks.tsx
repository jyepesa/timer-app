import { useEffect, useRef, useState } from "react";

export const useTimerInput = (value: number) => {
  const [input, setInput] = useState<number>(value);
  const [runningTimer, setrunningTimer] = useState(false);
  const timerRef = useRef<string | number>(input);
  const intervalRef = useRef<number | null>(0);

  useEffect(() => {
    if (runningTimer) {
      intervalRef.current = setInterval(() => {
        setInput((prev) => {
          const newValue = prev - 0.01;
          if (newValue <= 0) {
            setrunningTimer(false);
            return 0;
          }
          return newValue;
        });
      }, 10);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [runningTimer]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = parseInt(event.target.value);
    if (!isNaN(numValue)) {
      setInput(numValue);
      timerRef.current = numValue.toString();
    }
  };

  function handleStartTimer() {
    if (!input) {
      alert("Please enter the number of seconds you want to track");
      return;
    }
    setrunningTimer(true);
  }

  function handlePauseTimer() {
    setrunningTimer(false);
  }

  function handleReset() {
    setrunningTimer(false);
    setInput(0);
    timerRef.current = "0";
  }

  return {
    input,
    value: timerRef.current,
    handleInputChange,
    handleStartTimer,
    handlePauseTimer,
    handleReset,
  };
};
