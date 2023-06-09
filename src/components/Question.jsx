import React, {useState, useEffect} from "react"

const Question = (props) => {
    const {id, questionData, selectAnswer, selectedAnswers, finished} = props

    // console.log(questionData.answers)
    // console.log(questionData.correct_answer)

    const answerButtons = questionData.answers.map(answer => {
        let styles={}
        if (!finished) {
            styles={}
        } else if (questionData.correct_answer === answer && questionData.answers.indexOf(answer) === selectedAnswers[id].selectedAnswer) {
            styles={backgroundColor: "green"}
        } else if (questionData.answers.indexOf(answer) === selectedAnswers[id].selectedAnswer && answer !== questionData.correct_answer) {
            styles={backgroundColor: "red"}
        } else if (questionData.correct_answer === answer) {
            styles={backgroundColor: "orange"}
        } else {
            {}
        }
        return (
        <button 
            key={questionData.answers.indexOf(answer)+1}
            id={questionData.answers.indexOf(answer)+1}
            onClick={(event) => selectAnswer(event, id)}
            // className={selectedAnswers[id]===allAnswers.indexOf(answer) ? "selected" : "not-selected"}
            className={selectedAnswers[id].selectedAnswer === questionData.answers.indexOf(answer) ? "selected" : "not-selected"}
            style={styles}
        >
            {answer}
        </button>)
        }
    )

    return (
        <div className="Question--container">
            <p>{questionData.question}</p>
            {answerButtons}
        </div>
    )
}

export default Question