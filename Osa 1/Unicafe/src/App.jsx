import { useState } from 'react'
const StatisticLine = (props) => {return(<p style={{ margin: 0 }}>{props.text} {props.value}</p>)}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = (good+neutral+bad)
  const average = (good*1+neutral*0+bad*-1)

  


  return (
    <div>
      <h1>give feedback</h1>
       <Button onClick={() => setGood(good+1)} text="Good" />
       <Button onClick={() => setNeutral(neutral+1)} text="Neutral" />
       <Button onClick={() => setBad(bad+1)} text="Bad" />
       <h1>statistics</h1>

      {all == 0 ? (<p> No feedback given</p>):(
        <>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value={neutral}  />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={(average/(all)).toFixed(1)}  />
        <StatisticLine text="positive" value={(good/(all)*100).toFixed(1) + " %"} />
        </>
      )}



    </div>
  )
}

export default App