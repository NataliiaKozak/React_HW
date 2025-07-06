import { Link } from 'react-router-dom'
import styles from './Articles.module.css'

const articles = [
  { id: '1', title: 'Статья 1', content: 'Содержание статьи 1...' },
  { id: '2', title: 'Статья 2', content: 'Содержание статьи 2...' },
]

const Articles = () => {
  return (
    <div className={styles.container}>
      <h2>Список статей</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Articles
