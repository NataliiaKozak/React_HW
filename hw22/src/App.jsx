import React from 'react'
import Quote from './components/Quote'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app_container}>
      <h2 className={styles.title}>Random Quote Generator</h2>
      <Quote />
    </div>
  )
}

export default App
