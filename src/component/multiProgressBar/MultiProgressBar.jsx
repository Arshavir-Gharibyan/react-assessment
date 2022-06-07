import React from 'react';
import "./multiProgressBar.css"

function round(number) {
  if (isNaN(number)) return 0
  return Math.round(number)
}

function MultiProgressBar({ questionCount, selectedQuestion, correctAnswers }) {


  return (
    <div>
      <div className='score'>
        <span>{`Score ${round(correctAnswers / (selectedQuestion) * 100)}%`}</span>
        <span>{`Max Score ${round(((correctAnswers + (questionCount - selectedQuestion)) / questionCount) * 100)}%`}</span>

      </div>
      <div className="miniBar">
        <div className="miniSelectedBarProgress1" style={{ width: `${correctAnswers / (questionCount) * 100}%` }}></div>
        <div className="miniCorrectBarProgress2" style={{ width: `${selectedQuestion / (questionCount) * 100}%` }}></div>
        <div className="miniPotentialBarProgress3" style={{ width: `${((correctAnswers + (questionCount - selectedQuestion)) / questionCount) * 100}%` }}></div>
      </div>
    </div>

  )
}

export default MultiProgressBar