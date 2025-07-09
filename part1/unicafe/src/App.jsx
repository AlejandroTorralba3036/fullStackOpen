import { useState } from 'react'


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onGoodClick = ()=>{
    console.log("Aumentamos good ",good);
    setGood(good+1);
  }
  const onNeutralClick = ()=>{
    console.log("Aumentamos neutral ",neutral);
    setNeutral(neutral+1);
  }
  const onBadClick = ()=>{
    console.log("Aumentamos bad", bad);
    setBad(bad+1);
  }

  return (
    <div>
      <Feedback title={"Give feedback"}
        onGoodClick={onGoodClick}
        onNeutralClick={onNeutralClick}
        onBadClick={onBadClick}
      />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
      />
    </div>
  )
}

const Feedback = ({title, onGoodClick, onNeutralClick, onBadClick}) =>{
  return(
    <div className="Feedback-buttons">
      <h3>{title}</h3>
      <Button name={"Good"} onClick={onGoodClick}></Button>
      <Button name={"Neutral"} onClick={onNeutralClick}></Button>
      <Button name={"Bad"} onClick={onBadClick}></Button>
    </div>
  )
}
const Button = ({name, onClick}) => {
  return(
    <>
      <button onClick={onClick}>{name}</button>
    </>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  if (total) {
    const avarage = (good - bad)/total
    const positives = (good/total) *100
    return (
      <div>
        <h3>Statistics</h3>
        <StatisticLine text={"Good"} value={good}/>
        <StatisticLine text={"Bad"} value={bad}/>
        <StatisticLine text={"Neutral"} value={neutral}/>
        <h4>Total: {total}</h4>
        <StatisticLine text={"Avarage"} value={avarage}/>
        <StatisticLine text={"Positives"} value={positives}/>
      </div>
    )    
  } else {
    return (
      <div>
        <h3>Statistics</h3>
        <p>No feedback given, please click a button to submit feedback</p>      
      </div>
    )
  }
}
const StatisticLine = ({text, value}) => {
  if (text === 'Positives') {
    return(
      <p>{text}: {value} %</p>
    )    
  }
  return(
    <p>{text}: {value}</p>
  )
}


export default App
