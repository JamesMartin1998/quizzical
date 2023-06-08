import React, {useState, useEffect} from "react"

const Question = (props) => {
    const {id, questionData, selectAnswer, selectedAnswers} = props

    // console.log(questionData)

    const answerButtons = questionData.answers.map(answer => (
        <button 
            key={questionData.answers.indexOf(answer)+1}
            id={questionData.answers.indexOf(answer)+1}
            onClick={(event) => selectAnswer(event, id)}
            // className={selectedAnswers[id]===allAnswers.indexOf(answer) ? "selected" : "not-selected"}
            className={selectedAnswers[id].selectedAnswer === questionData.answers.indexOf(answer) ? "selected" : "not-selected"}
        >
            {answer}
        </button>
        )
    )

    return (
        <div className="Question--container">
            <p>{questionData.question}</p>
            {answerButtons}
        </div>
    )
}

export default Question