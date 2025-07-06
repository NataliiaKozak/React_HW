import { useParams, useNavigate } from 'react-router-dom'
import styles from './ArticlePage.module.css'

const articles = {
  1: { title: 'Статья 1', content: 'Содержание статьи 1...' },
  2: { title: 'Статья 2', content: 'Содержание статьи 2...' },
}

const ArticlePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const article = articles[id]

  return (
    <div className={styles.articleContainer}>
      <h2 className={styles.title}>{article.title}</h2>
      <p className={styles.content}>{article.content}</p>
      <p className={styles.path}>Текущий путь: {window.location.pathname}</p>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  )
}

export default ArticlePage
