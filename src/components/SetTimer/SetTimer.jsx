import './SetTimer.css';

function SetTimer(props) {


    return (

        <div id="SetTimer">

            <h2>Set Your Timer</h2>

            <div className="digit">
                <label htmlFor="setHours">Hours</label><br/>
                <input placeholder="0" type="number" id="setHours"
                        onClick={props.updateValuesEvent}/>
            </div>

            <div className="digit">
                <label htmlFor="setMinutes">Minutes</label><br/>
                <input placeholder="0" type="number" id="setMinutes"
                        onClick={props.updateValuesEvent}/>
            </div>

            <div className="digit">
                <label htmlFor="setSeconds">Seconds</label><br/>
                <input placeholder="0" type="number" id="setSeconds"
                        onClick={props.updateValuesEvent}/>
            </div>

            <div>
                <button id="setTimerButton" onClick={props.startTimerEvent}>
                    Start Timer
                </button>
            </div>

        </div>
    );
}

export default SetTimer;