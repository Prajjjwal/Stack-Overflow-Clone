import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Questions from './Questions'
import './HomeMainbar.css'
const HomeMainbar = () => {

  var questionsList = [{
    id: 1,
    votes: 3,
    noOfAnswers: 2,
    title:  "What is a function?",
    body: "It meant to be",
    tags : ["java","node js", "react js", "mongo db"],
    userPosted: "mano",
    askedOn : "jan 1"
  },{
    id: 2,
    votes: 0,
    noOfAnswers: 0,
    title: "What is a function?",
    body: "It meant to be",
    tags : ["javascript","R","Python"],
    userPosted: "paju",
    askedOn : "apr 15"
  },{
    id: 3,
    votes: 1,
    noOfAnswers: 0,
    title: "What is a function?",
    body: "It meant to be",
    tags : ["javascript","R","Python"],
    userPosted: "paju",
    askedOn : "apr 15"
  }]

  const location = useLocation()

  const user = 1;
  const navigate = useNavigate();

  const checkAuth = () =>{
    if(user === null){
      alert("Login or Signup to ask a question")
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }
  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList === null?
          <h1>Loading...</h1>:
          <>
            <p>{questionsList.length} questions</p>
            {
              questionsList.map((question) => (
                <Questions question={question} key={question.id} />
              ))
            }
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
