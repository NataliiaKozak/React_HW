import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Articles from './components/Articles/Articles.jsx'
import ArticlePage from './components/ArticlePage/ArticlePage.jsx'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/" end className={styles.navLink}>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to="/articles" className={styles.navLink}>
                Статьи
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles.contentWrapper}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
