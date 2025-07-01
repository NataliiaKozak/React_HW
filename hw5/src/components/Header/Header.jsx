import styles from './Header.module.css'
import logo from '../../assets/g10.png'

const Header = () => {
  return (
    <div>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Header
