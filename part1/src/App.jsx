const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {parts} {exercises1}
      </p>
      <p>
        {parts} {exercises2}
      </p>
      <p>
        {parts} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App