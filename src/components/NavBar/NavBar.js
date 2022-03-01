import styles from './NavBar.module.scss'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <span className={styles.icon + ' fa fa-tasks'}></span>
        <ul>
          <li><Link to="/"><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/">Home</NavLink></Link></li>
          <li><Link to="/favorite"><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/favorite">Favorite</NavLink></Link></li>
          <li><Link to="/about"><NavLink className={({ isActive}) => isActive && styles.linkActive} to="/about">About</NavLink></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;