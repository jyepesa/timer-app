import "./App.scss";
import { useTimerInput } from "./hooks";

function App() {
  const timerData = useTimerInput(0);

  return (
    <div className="timer">
      <p className="timer__text">Set Timer</p>
      <input
        className="timer__input"
        value={timerData.value}
        type="number"
        onChange={timerData.handleInputChange}
        min={0}
      />
      <h2 className="timer__timer">
        Time left: <br />
        {timerData.input.toFixed(3) + "s"}
      </h2>
      <div className="timer__buttons">
        <button onClick={timerData.handleStartTimer}>Start</button>
        <button onClick={timerData.handlePauseTimer}>Pause</button>
        <button onClick={timerData.handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
