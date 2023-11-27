import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/Categories.module.css'
import { Category } from '../../models/models'

interface CategoriesProps {
  title: string
  style?: any
  categories?: Category[]
  amount?: number
}

const Categories = ({
  title,
  categories = [],
  amount = 5,
}: CategoriesProps) => {
  const list = categories.filter((_: Category, i: number) => i < amount)

  return (
    <section className={styles.section}>
      <h2>{title}</h2>

      <div className={styles.list}>
        {list.map(({ id, name, image }: Category) => (
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
