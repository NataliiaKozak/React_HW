import React, { useState } from 'react'
import Answer from './Answer'

function MathQuiz() {
  const [points, setPoints] = useState(0)

  const [a, setA] = useState(8)
  const [b, setB] = useState(1)

  const checkAnswer = (userAnswer) => {
    if (userAnswer === a + b) {
      setPoints(points + 1)
    } else {
      setPoints(points - 1)
    }

    setA(Math.floor(Math.random() * 10))
    setB(Math.floor(Math.random() * 10))
  }

  return (
    <div className="quiz-container">
      <p>Ваши очки: {points}</p>
      <p>
        {a} + {b} = ?
      </p>
      <Answer onCheck={checkAnswer} />
    </div>
  )
}

export default MathQuiz
