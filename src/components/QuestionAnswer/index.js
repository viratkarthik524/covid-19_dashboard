import './index.css'

const QuestionAnswer = props => {
  const {details} = props
  const {answer, question} = details
  return (
    <li className="list-container">
      <h3 className="question">{question}</h3>
      <p className="answer">{answer}</p>
    </li>
  )
}

export default QuestionAnswer
