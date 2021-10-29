import React, { useState } from 'react'
import './index.css'

const PoshRoundButton = (props) => (
  <button {...props} className={"btn btn-" + props.colour} onClick={props.handleClick}>
    {props.text}
  </button>)

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Hello Luna:</h2>
      <PoshRoundButton colour={dark} handleClick={() => setGood(good + 1)} text={`Good (${good})`} />
      <PoshRoundButton style={{ marginLeft: '15px', marginRight: '15px' }} colour={"amber"} handleClick={() => setNeutral(neutral + 1)} text={`Neutral (${neutral})`} />
      <PoshRoundButton style={{ marginRight: '15px' }} colour={"red"} handleClick={() => setBad(bad + 1)} text={`Bad (${bad})`} />
      <br></br>
      <br></br>

      <h2>Statistics</h2>
      <table>
        <tr>
          <h3 className={"green"}><td>Good</td><td>{good}</td></h3>
          <h3 className={"amber"}><td>Neutral</td><td>{neutral}</td></h3>
          <h3 className={"red"}><td>Bad</td><td>{bad}</td></h3>
        </tr>
      </table>
    </div>
  )
}

export default App