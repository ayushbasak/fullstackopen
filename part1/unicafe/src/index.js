import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Header = ({text})=>{
  return (
    <>
    <p>{text}</p>
    </>
  );
}
const Statistic = ({parameter, text})=>{
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{parameter}</td>
      </tr>
    </>
  );
}
const Statistics = ({good, neutral, bad})=>{
  const total = good + neutral + bad;
  const average = (total === 0)?0:((good - bad)/total).toFixed(2);
  const positive = ((total === 0)?0:(good/total)*100).toFixed(2) + " %";
  return (
    <>
    <table>
      <tbody>
        <tr>
          <th>Data</th>
          <th>Count</th>
        </tr>
        <Statistic parameter = {good} text = "Good" />
        <Statistic parameter = {neutral} text = "Neutral" />
        <Statistic parameter = {bad} text = "Bad" />
        <Statistic parameter = {total} text = "Total" />
        <Statistic parameter = {average} text = "Average" />
        <Statistic parameter = {positive} text = "Positive" />
      </tbody>
    </table>
    </>
  );
};

const Button = ({event, text})=>{
  return (
    <>
    <button onClick = {event}>{text}</button>
    </>
  );
};

const App = ()=>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const calculateBackground = ()=>{
  //  let total = good + neutral + bad;
  //  let average = (total === 0)?0:((good - bad)/total);
  //  let positive = (total === 0)?0:(good/total);
  //  let object = {a: total, b: average, c: positive};
  //  return object;
  // }

  const AddToGood = ()=>{
    setGood(good+1);
  };
  const AddToNeutral = ()=>{
    setNeutral(neutral+1);
  };
  const AddToBad = ()=>{
    setBad(bad+1);
  }
  return (
    <div>
      <img src = "logo192.png" alt = "react logo" />
      <Header text = "Unicafe Feedback Form"/>
      <Button event = {AddToGood} text = "Good"/>
      <Button event = {AddToNeutral} text = "Neutral"/>
      <Button event = {AddToBad} text = "Bad" />
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  );
};

ReactDOM.render(<App />,document.getElementById('root'));