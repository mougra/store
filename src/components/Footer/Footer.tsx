import React from 'react'

import styles from '../../styles/Footer.module.css'

import { ROUTES } from '../../utils/routes'
import { Link } from 'react-router-dom'

import LOGO from '../../images/logo.svg'

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt='stuff' />
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by{' '}
        <a href='https://github.com/mougra' target='_blank' rel='noreferrer'>
          mougra
        </a>
      </div>
      <div className={styles.socials}>
        <a href='https://github.com/mougra' target='_blank' rel='noreferrer'>
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  )
}
