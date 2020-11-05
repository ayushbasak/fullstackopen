import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Anecdote = ({anecdotes, index})=>{
  return (
    <>
      <p>{anecdotes[index]}</p>
    </>
  );
}
const MostVotedAnecdote = ({text, anecdote, votes})=>{
  return (
    <>
      <h3>{text}</h3>
      <p>{anecdote}</p>
      <p>Votes: {votes}</p>
    </>
  );
}
const VoteCount = ({text, votes})=>{
  return (
    <>
      <p>{text} : {votes}</p>
    </>
  );
}

const Button = ({event, text})=>{
  return (
    <button onClick = {event}>{text}</button>
  );
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const highestVote = votes.indexOf(Math.max(...votes));
  const increaseVote = ()=>{
    const copyVotes = [...votes];
    copyVotes[selected] +=1;
    setVotes(copyVotes);
  }
  const nextAnecdote = ()=>{
    let updatedSelected = selected;
    if(updatedSelected === anecdotes.length -1)
      updatedSelected -= anecdotes.length;
    setSelected(updatedSelected+1);
  };

  return (
    <div>
      <Anecdote anecdotes = {anecdotes} index = {selected} />
      <VoteCount votes = {votes[selected]} text = "Votes" />
      <Button event = {increaseVote} text = "Vote" />
      <Button event = {nextAnecdote} text = "Next Anecdote" />
      <MostVotedAnecdote text = "Most Popular" anecdote = {anecdotes[highestVote]} votes = {votes[highestVote]} />
    </div>
  )
}

const anecdotes = [
  'PHP Bad!',
  'Javascript meh!',
  'DEBUG 😭',
  'Array starts at 0',
  'HTML is not a programming laguage',
  'Bootcamp > CS Degree at Harvard',
  'Programmer -> Introvert (No Friends)'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)