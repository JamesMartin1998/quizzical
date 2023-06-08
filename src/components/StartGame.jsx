import React from "react"

const StartGame = (props) => {
    const {handleStartQuiz} = props

    console.log("StartGame component loaded")


    return (
        <div className="StartGame--container">
            <h1>Quizzical</h1>
            <p>A quiz game built with React</p>
            <button onClick={handleStartQuiz}>
                Start Quiz
            </button>
        </div>
    )
}

export default StartGame