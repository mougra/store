import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/Products.module.css'

interface ProductsProps {
  title: any
  style?: any
  products: any
  amount: any
}

interface ProductProps {
  id: any
  images: any
  title: any
  category: any
  price: any
}

const Products = ({
  title,
  style = {},
  products = [],
  amount,
}: ProductsProps) => {
  const list = products.filter((_: any, i: any) => i < amount)

  return (
    <section className={styles.products} style={style}>
      {title && <h2>{title}</h2>}

      {list.length === 0 && (
        <span className={styles.noless}>
          There are no products cheaper than 100$
        </span>
      )}
      <div className={styles.list}>
        {list.map(
          ({
            id,
            images,
            title,
            category: { name: cat },
            price,
          }: ProductProps) => (
            <Link to={`/products/${id}`} key={id} className={styles.product}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${images[0]})` }}
              />

              <div className={styles.wrapper}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.cat}>{cat}</div>
                <div className={styles.info}>
                  <div className={styles.prices}>
                    <div className={styles.price}>{price}$</div>
                    <div className={styles.oldPrice}>
                      {Math.floor(price * 0.8)}$
                    </div>
                  </div>

                  <div className={styles.purchases}>
                    {Math.floor(Math.random() * 20 + 1)} purchased
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  )
}

export default Products
