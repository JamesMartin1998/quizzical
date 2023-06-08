import React, {useState, useEffect} from "react"
import Question from "./Question"
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

const Quiz = () => {

    const [questionsData, setQuestionsData] = useState([])

    console.log("Quiz component loaded")
    console.log(questionsData)

    useEffect(() => {
        const getQuestions = async () => {
            const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            const data = await res.json() 
            const results = data.results
            setQuestionsData(results)
        }
        getQuestions()
        
    }, [])

    const questions = questionsData.map(questionData => {
        return <Question key={nanoid()} questionData={questionData} />
    })

    const checkAnswers = () => {
        console.log("check")
    }

    return (
        <div className="Quiz--container">
            {questions}
            <button onClick={checkAnswers}>
                Check Answers
            </button>
        </div>
    )
}

export default Quiz