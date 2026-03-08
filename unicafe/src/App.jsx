import { useState } from 'react'


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ( props ) => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>posotive {props.posotive}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const posotive = (good / all) * 100;


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => {setGood(good + 1)}} text='good' />
      <Button onClick={() => {setNeutral(neutral + 1)}} text='neutral' />
      <Button onClick={() => {setBad(bad + 1)}} text='bad' />
      <h1>Statistics</h1>
      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      all={all}
      average={average}
      posotive={posotive}/>
    </div>
  )
}

export default App