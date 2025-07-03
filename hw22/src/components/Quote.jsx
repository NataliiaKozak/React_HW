import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRandomQuote } from '../features/quote/quoteSlice.js'
import styles from './Quote.module.css'

const Quote = () => {
  const quote = useSelector((state) => state.quote.quote)
  const author = useSelector((state) => state.quote.author)
  const status = useSelector((state) => state.quote.status)
  const error = useSelector((state) => state.quote.error)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRandomQuote())
  }, [dispatch])

  const handleNewQuote = () => {
    dispatch(fetchRandomQuote())
  }

  return (
    <div className={styles.quote_container}>
      {status === 'idle' && <p>Click button to get first quote</p>}
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <div className={styles.quote}>
          <p>"{quote}"</p>
          <p className={styles.author}>- {author}</p>
        </div>
      )}
      {status === 'failed' && <p>{error}</p>}
      <button
        className={styles.button}
        onClick={handleNewQuote}
        disabled={status === 'loading'}
      >
        New Quote
      </button>
    </div>
  )
}

export default Quote
