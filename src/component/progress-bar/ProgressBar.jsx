import React from 'react';
import "./ProgressBar.css"

function ProgressBar({ questionCount, selectedQuestion }) {
  return (
    <div className="progress">
      <div className="bar" style={{ width: `${selectedQuestion / (questionCount - 1) * 100}%` }}></div>
    </div>
  )
}

export default ProgressBar