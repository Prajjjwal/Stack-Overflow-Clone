import React from 'react'
import { Link } from 'react-router-dom'

const Questions = ({question}) => {
  return (
    <div className='display-questions-container'>
      <div className="display-votes-ans">
        <p>{question.votes}</p>
        <p>Votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{question.noOfAnswers}</p>
        <p>Answers</p>
      </div>
      <div className="display-question-details">
        <Link to={`/Questions/${question.id}`} className="question-title-link">{question.title}</Link>
        <div className="display-tags-time">
            <div className="display-tags">
                {
                    question.tags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div>
           <p className="display-time">
                asked {question.askedOn} {question.userPosted}
           </p>
        </div>
      </div>
    </div>
  )
}

export default Questions
