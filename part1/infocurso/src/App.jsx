const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const totalExercises = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header  nombreCurso={course}/>
      <Content 
        partes1={part1} 
        ejercicios1={exercises1} 
        partes2={part2} 
        ejercicios2={exercises2} 
        partes3={part3} 
        ejercicios3={exercises3}
      />
      <Total total={totalExercises} />
    </div>
  )
}
const Header = ({ nombreCurso }) => {
  return (
    <h1>
      {nombreCurso}
    </h1>
  )
}

const Content = ({ partes1, ejercicios1, partes2, ejercicios2, partes3, ejercicios3  }) => {
  return(
    <div>
      <Part nombre={partes1} ejercicios={ejercicios1} />
      <Part nombre={partes2} ejercicios={ejercicios2} />
      <Part nombre={partes3} ejercicios={ejercicios3} />
    </div>
  )
}

const Part = ({ nombre, ejercicios }) => {
  return(
    <p>
      {nombre} {ejercicios}
    </p>
  )
}

const Total = ({ total }) => {
  return(
    <p >
      Number of exercises {total}
    </p>
  )
}
export default App