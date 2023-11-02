import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/Categories.module.css'

interface CategoriesProps {
  title: any
  style?: any
  categories: any
  amount: any
}

interface CategoryProps {
  id: any
  name: any
  image: any
}

const Categories = ({ title, categories = [], amount }: CategoriesProps) => {
  const list = categories.filter((_: any, i: any) => i < amount)

  return (
    <section className={styles.section}>
      <h2>{title}</h2>

      <div className={styles.list}>
        {list.map(({ id, name, image }: CategoryProps) => (
          <Link to={`/categories/${id}`} key={id} className={styles.item}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
            />
            <h3 className={styles.title}>{name}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories
