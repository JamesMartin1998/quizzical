import React, {useState, useEffect} from "react"

const Question = (props) => {
    const {questionData} = props

    const [allAnswers, setAllAnswers] = useState(questionData.incorrect_answers)

    const [selectedAnswer, setSelectedAnswer] = useState("")

    console.log(questionData.correct_answer)
    console.log(selectedAnswer)
    
    useEffect(() => {
        // storing an array of all answers and the correct is at random index
        setAllAnswers(prevAnswers => {
            const randomIndex = Math.floor(Math.random() * 4)
            const randomisedAnswers = [...prevAnswers]
            randomisedAnswers.splice(randomIndex, 0, questionData.correct_answer)
            return randomisedAnswers
        })
    }, [])

    const selectAnswer = (event) => {
        const {id} = event.target
        // set as index
        setSelectedAnswer(id-1)
        
    }

    const answerButtons = allAnswers.map(answer => (
        <button 
            key={allAnswers.indexOf(answer)+1}
            id={allAnswers.indexOf(answer)+1}
            onClick={selectAnswer}
            className={selectedAnswer===allAnswers.indexOf(answer) ? "selected" : "not-selected"}
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