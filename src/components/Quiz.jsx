import React, {useState, useEffect} from "react"

const Quiz = () => {

    const [questionsData, setQuestionsData] = useState([])

    useEffect(() => {
        const getQuestions = async () => {
            const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            const data = await res.json()
            setQuestionsData(data.results)
            console.log(data.results)
        }
        getQuestions()
    }, [])

    return (
        <div className="Quiz--container">
            test
        </div>
    )
}

export default Quiz