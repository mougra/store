import React, { useEffect } from 'react'

import styles from '../../styles/Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { useFetchСategoriesQuery } from '../../store/categories/categories.api'

export const Sidebar = ({ amount = 8 }: any) => {
  const {
    isLoading: isLoadingCategories,
    error: isErrorCategories,
    data: categories,
  } = useFetchСategoriesQuery('categories')

  let categoriesList: any = []

  if (categories) {
    categoriesList = categories.filter((_: any, i: any) => i < amount)
  }

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {categoriesList &&
            categoriesList.map((category: any) => (
              <li key={category.id}>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ''}`
                  }
                  to={`/categories/${category.id}`}
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>

      <div className={styles.footer}>
        <a href='/help' className={styles.link} target='_blank'>
          Help
        </a>
        <a
          href='/terms'
          className={styles.link}
          target='_blank'
          style={{ textDecoration: 'underline' }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  )
}
