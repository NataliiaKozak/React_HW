import React, { useState } from 'react'

function Answer({ onCheck }) {
  const [userAnswer, setUserAnswer] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onCheck(Number(userAnswer))
    setUserAnswer('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Введите ответ"
      />
      <button type="submit">Проверить</button>
    </form>
  )
}

export default Answer
