import React from "react"

const StartGame = (props) => {
    const {handleStartQuiz} = props
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