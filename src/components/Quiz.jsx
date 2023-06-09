import React, {useState, useEffect} from "react"
import Question from "./Question"
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

const Quiz = () => {

    const [questionsData, setQuestionsData] = useState([])
    const [allAnswers, setAllAnswers] = useState([])
    const [selectedAnswers, setSelectedAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [finished, setFinished] = useState(false)

    console.log("Quiz component loaded")
    // console.log(questionsData)
    console.log(allAnswers)
    // console.log(selectedAnswers)

    const createAllAnswersArray = () => {
        const allAnswersArray = []
        for (let i=0; i<questionsData.length; i++) {
            const randomIndex = Math.floor(Math.random() * 4)
            const obj = {id: i, question: questionsData[i].question ,answers: [...questionsData[i].incorrect_answers], correct_answer: questionsData[i].correct_answer}
            // need to randomly add the correct answer here
            obj.answers.splice(randomIndex, 0, questionsData[i].correct_answer)
            allAnswersArray.push(obj)
        }
        return allAnswersArray
    }

    const createSelectedAnswersArray = () => {
        const selectedAnswersArray = []
        for (let i=0; i<questionsData.length; i++) {
            const obj = {id: i, selectedAnswer: ""}
            selectedAnswersArray.push(obj)
        }
        return selectedAnswersArray
    }

    const selectAnswer = (event, questionId) => {
        // id is the button id
        const {id} = event.target
        setSelectedAnswers(prevData => {
            const startingArray = [...prevData]
            const questionObj = startingArray[questionId]
            questionObj.selectedAnswer = id-1
            return startingArray
        })
        // console.log(`Question id = ${questionId} , Button id = ${id}`)
        // console.log(selectedAnswers)
    }

    const getQuestions = async () => {
        const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        const data = await res.json() 
        const results = data.results
        setQuestionsData(results)
    }

    useEffect(() => {
        
        getQuestions()
        
    }, [])

    useEffect(() => {
        setAllAnswers(createAllAnswersArray())
        setSelectedAnswers(createSelectedAnswersArray())
    }, [questionsData])

    const questions = allAnswers.map(questionData => {
        return <Question key={questionData.id} id={questionData.id} questionData={questionData} selectAnswer={selectAnswer} selectedAnswers={selectedAnswers} />
    })

    const checkAnswers = () => {
        // console.log("check")
        for (let i=0; i<selectedAnswers.length; i++) {
            if (allAnswers[i].answers[selectedAnswers[i].selectedAnswer] === allAnswers[i].correct_answer){
                setScore(prevScore => prevScore+1)
            }
        }
        setFinished(true)
        console.log(`Your score was ${score}`)
    }

    const resetGame = () => {
        getQuestions()
        setScore(0)
        setFinished(false)
    }

    return (
        <div className="Quiz--container">
            {questions}
            {finished ? <button onClick={resetGame}>Play Again</button> : <button onClick={checkAnswers}>
                Check Answers
            </button>}
            {finished && <p>You scored {score} out of {allAnswers.length}</p>}
        </div>
    )
}

export default Quiz