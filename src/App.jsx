import React from "react"
import StartGame from "./components/StartGame"

const App = () => {
  return (
    <div className="App--container">
      <div id="App--yellow-circle" className="App--circle-design"></div>
      <div id="App--blue-circle" className="App--circle-design"></div>
      <StartGame />
    </div>
  )
}

export default App