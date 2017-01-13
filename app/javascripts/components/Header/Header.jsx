import React from 'react'
import { Link } from 'react-router'
import * as styles from './styles.scss'

const Header = () => (
  <div className={styles.header}>
    <ul className='right'>
      <li className={styles['nav-links']}>
        <Link to='/'>{'Browse'}</Link>
      </li>
      <li className={styles['nav-links']}>
        <Link to='/cart'>{'cart'}</Link>
      </li>
    </ul>
  </div>
)

export default Header
