import React from 'react';
const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Total = ({ course }) => {
    const total = course.parts.reduce((sum,part) => (sum + part.exercises),0);
    return(
      <p>Number of exercises {total}</p>
    ) 
  }
  
  const Part = (props) => {
    return (
        <tr>
            <td>{props.part.name}</td>
            <td>{props.part.exercises} </td>
        </tr>
    )
  }
  
  const Course = ({course})=>{
    return (
      <div>
        <Header course = {course} />
        <Content course = {course} />
        <Total course = {course} />
      </div>
    );
  }
  
  const Content = ({ course }) => {
    return (
      <div class = "object">
          <table>
              <tbody>
              {course.parts.map((part, exercises) => <Part key = {exercises}part = {part} />)}
              </tbody>
          </table>
      </div>
    )
  }
export default Course;