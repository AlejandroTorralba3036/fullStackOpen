const App = () => {
  const course = { 
  name:'Half Stack application development',
  parts : [
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
}
  const totalExercises = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  return (
    <div>
      <Header  nombreCurso={course.name}/>
      <Content partes={course.parts}      />
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

const Content = ({partes}) => {
  return(
    <div>
      <Part nombre={partes[0].name} ejercicios={partes[0].exercises} />
      <Part nombre={partes[1].name} ejercicios={partes[1].exercises} />
      <Part nombre={partes[2].name} ejercicios={partes[2].exercises} />
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