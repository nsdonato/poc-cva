import './App.css'
import { ButtonAlgo } from './components/algo'
import { Button } from './components/button'
import { ButtonGreeter } from './components/greeter'

function App() {
  return (
    <main className="flex justify-center items-center">
      <Button>Hola Mundo</Button>
      <ButtonAlgo>Hola chat</ButtonAlgo>
      <ButtonGreeter isLoggedIn={false}>Greeter</ButtonGreeter>
    </main>
  )
}

export default App
