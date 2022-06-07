import React, { useEffect, useState } from 'react';
import { getQuestion } from '../../service/service';
import Question from '../question/Qurstion';

function Main() {


  const [data, setData] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState(0)

  function nextQuestion() {
    setSelectedQuestion(selectedQuestion + 1)
  }

  useEffect(() => {
    getQuestion()
      .then((data) => {
        setData(data)
      })
  }, [])

  return (data.length &&
    <Question
      data={data[selectedQuestion]}
      nextQuestion={nextQuestion}
      questionCount={data.length}
      selectedQuestion={selectedQuestion}
      isFinish={selectedQuestion + 1 === data.length}
    />)

}

export default Main