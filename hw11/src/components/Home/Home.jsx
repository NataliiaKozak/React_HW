import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
  const navigate = useNavigate()

  const goToArticle = () => {
    navigate('/articles/1')
  }

  return (
    <div className={styles.container}>
      <h1>Добро пожаловать!</h1>
      <p>Читайте статьи о React</p>
      <button onClick={goToArticle} className={styles.button}>
        Читать первую статью
      </button>
    </div>
  )
}

export default Home
