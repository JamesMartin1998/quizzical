import React, {useState} from "react"
import StartGame from "./components/StartGame"
import Quiz from "./components/Quiz"

const App = () => {

  const [play, setPlay] = useState(false)

  const handleStartQuiz = () => {
    setPlay(true)
  }

  console.log("App component loaded")

  return (
    <div className="App--container">
      <div id="App--yellow-circle" className="App--circle-design"></div>
      <div id="App--blue-circle" className="App--circle-design"></div>

      {play ? <Quiz /> : 
      <StartGame 
        handleStartQuiz={handleStartQuiz}
      />
      }
    </div>
  )
}

export default App