import Button from "./Button"

function App(){
const firstName = 'Kartik'
  return (   //this is JSX ( JavaScript + HTML )
    <div>
      <Button/>
    <h1>React</h1>
    <p>Hey I am finally learning React </p>
    <p>{firstName}</p>
    </div>
  )
}


export default App