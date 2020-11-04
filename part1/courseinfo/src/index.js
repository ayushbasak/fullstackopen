// Ayush Basak

import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props)=>{
  console.log(props);
  return(
    <>
    <h1>{props.course.course}</h1>
    </>
  );
};
const Part = (props)=>{
  console.log(props)
  return (
    <>
    <p>{props.course.parts[0].name} {props.course.parts[0].exercise}</p>
    <p>{props.course.parts[1].name} {props.course.parts[1].exercise}</p>
    <p>{props.course.parts[2].name} {props.course.parts[2].exercise}</p>
    </>
  );
};
const Content = (props)=>{
  return (
    <>
    <Part course = {props.course}/>
    </>
  );
};
const Total = (props)=>{
  return (
    <>
    <p>Number of exercises {props.course.parts[0].exercise + props.course.parts[1].exercise + props.course.parts[2].exercise}</p>
    </>
  );
}
const App = () => {
  const course = {
    course : 'Half Stack application development',
    parts : [
      {
        name: "Fundamentals of React",
        exercise: 10
      },
      {
        name: "Using props to pass data",
        exercise: 7
      },
      {
        name: "State of a Component",
        exercise: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course}/>
      <Content course = {course}/>
      <Total  course = {course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))