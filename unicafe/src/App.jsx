import { useState } from 'react'


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const posotive = (good / all) * 100;

  
  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNuetralClick = () => {
    setNeutral(neutral + 1)
  }
  
    const handlebadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNuetralClick} text='neutral' />
      <Button onClick={handlebadClick} text='bad' />
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>posotive {posotive}</p>
    </div>
  )
}

export default App