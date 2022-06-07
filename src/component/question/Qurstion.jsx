import React, { useEffect, useState } from 'react';
import ProgressBar from '../progress-bar/ProgressBar';
import MultiProgressBar from '../multiProgressBar/MultiProgressBar';

import { textConvertor, shuffle } from '../../util';

import star from '../../assets/star.png';
import "./question.css"


function Question({ data, nextQuestion, questionCount, selectedQuestion, isFinish }) {

  const [selectedId, setSelectedId] = useState(0)
  const [rightAnswer, setRightAnswer] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [userAnswer, setUserAnswer] = useState()
  const [tempAnswer, setTempAnswer] = useState();
  const [answers, setAnswers] = useState([]);


  useEffect(() => {
    setUserAnswer(null)
    setAnswers([]);
    setSelectedId(0)
    setRightAnswer(false)
    const a = [];
    a.push(data.correct_answer);
    a.push(...data.incorrect_answers);
    const shuffleAnswers = shuffle(a);
    setAnswers(shuffleAnswers);
    setTempAnswer(data)
  }, [data])



  function onSelect(selectedItemId, selectedAnswer) {
    setSelectedId(selectedItemId)
    setUserAnswer(selectedAnswer)
    if (selectedAnswer === tempAnswer.correct_answer) {
      setRightAnswer(true)
    }
  }


  function onSubmit() {
    if (userAnswer === tempAnswer.correct_answer) {
      setCorrectAnswers(correctAnswers + 1)
    }
    nextQuestion()
  }

  function getStars(level) {
    if (tempAnswer.difficulty === "easy") {
      return (
        <div>
          <img src={star} alt="nice" style={{ width: "30px", height: "30px" }} />
        </div>
      )
    }
    if (tempAnswer.difficulty === "medium") {
      return (
        <div>
          <img src={star} alt="nice" style={{ width: "30px", height: "30px" }} />
          <img src={star} alt="nice" style={{ width: "30px", height: "30px" }} />
        </div>
      )
    }
    if (tempAnswer.difficulty === "hard") {
      return (
        <div>
          <img src={star} alt="nice" style={{ width: "30px", height: "30px" }} />
          <img src={star} alt="nice" style={{ width: "30px", height: "30px" }} />
          <img src={star} alt="nice" style={{ width: "30px", height: "30px" }} />
        </div>
      )
    }
  }




  return (
    <div className="container">
      {!isFinish && tempAnswer ?
        <div className="content">
          <ProgressBar questionCount={questionCount} selectedQuestion={selectedQuestion} />
          <div className="question-number">Question {selectedQuestion + 1} of {questionCount}</div>
          <div>
            <div>{textConvertor(tempAnswer.category)}</div>
            <div>
              {getStars(tempAnswer.difficulty)}
            </div>
          </div>
          <div className="question" >{textConvertor(tempAnswer.question)}</div>
          <div className='select-bar'>
            <div className="select-column">
              {answers.map((item, index) => {
                return (
                  <button

                    key={index}
                    className={
                      `select-button 
                      ${(userAnswer !== tempAnswer.correct_answer && item === userAnswer) ? 'active' : ''}
                      ${(item === tempAnswer.correct_answer && userAnswer) ? "success" : ''}
                      ${(userAnswer === tempAnswer.correct_answer && item === userAnswer) ? "active success" : ""}
                      `
                    }
                    disabled={selectedId !== 0}
                    onClick={() => onSelect(index + 1, item)}
                  >{textConvertor(item)}</button>
                )
              })}
            </div>
          </div>
          {selectedId !== 0 &&
            <div style={{ textAlign: 'center' }}>
              <button className="select-button" style={{ maxWidth: "50px", marginBottom: "25px" }} onClick={() => onSubmit()} >next </button>
              <div>{rightAnswer ? "Correct!" : "Sorry!"}</div>
            </div>
          }
          <MultiProgressBar questionCount={questionCount} selectedQuestion={selectedQuestion} correctAnswers={correctAnswers} />
        </div> :
        <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
          <div className="finish-bar" >
            Your result is {correctAnswers} of {questionCount}
          </div>
        </div>
      }


    </div>
  )
}

export default Question