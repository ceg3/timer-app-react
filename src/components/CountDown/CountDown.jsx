import './CountDown.css';

function CountDown({ clearTimerEvent, counter }) {

    let sec = counter;
    const hours = Math.floor(sec / 3600);
    sec = sec - hours * 3600;
    const minutes = Math.floor(sec / 60);
    sec = sec - minutes * 60;
    const seconds = sec;

    return (
    <div id="CountDown">
        <h2>Time Remaining</h2>

        <div className="digit">
            <label htmlFor="countHours">Hours</label>
            <br />
            <input
                placeholder="0"
                type="number"
                id="countHours"
                value={hours}
                readOnly
            />
        </div>

        <div className="digit">
            <label htmlFor="countMinutes">Minutes</label>
            <br />
            <input
                placeholder="0"
                type="number"
                id="countMinutes"
                value={minutes}
                readOnly
            />
        </div>

        <div className="digit">
            <label htmlFor="countSeconds">Seconds</label>
            <br />
            <input
                placeholder="0"
                type="number"
                id="countSeconds"
                value={seconds}
                readOnly
            />
        </div>

        <div>
            <button id="clearTimerButton" onClick={clearTimerEvent}>
                Clear Timer
            </button>
        </div>
        </div>
    );
}

export default CountDown;