import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Product.module.css'
import { IProducts } from '../../models/models'
import { useAppDispatch } from '../../hooks/redux'
import { addItemToCart } from '../../store/user/user.slice'

const SIZES = [4, 4.5, 5]

const Product = (item: IProducts) => {
  const { title, price, images, description } = item
  const dispatch = useAppDispatch()
  const [currentImage, setCurrentImage] = useState<any>()
  const [currentSize, setCurrentSize] = useState<number>()

  useEffect(() => {
    if (!images.length) return

    setCurrentImage(images[0])
  }, [images])

  const addToCart = () => {
    dispatch(addItemToCart(item))
  }

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={styles['images-list']}>
          {images.map((image: any, i: any) => (
            <div
              key={i}
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}$</div>
        <div className={styles.color}>
          <span>Color:</span> Green
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span>

          <div className={styles.list}>
            {SIZES.map((size) => (
              <div
                onClick={() => setCurrentSize(size)}
                className={`${styles.size} ${
                  currentSize === size ? styles.active : ''
                }`}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <button
            onClick={addToCart}
            className={styles.add}
            disabled={!currentSize}
          >
            Add to cart
          </button>
          <button className={styles.favourite}>Add to favourites</button>
        </div>

        <div className={styles.bottom}>
          <div className={styles.purchase}>19 people purchased</div>

          <Link to='/'>Return to store</Link>
        </div>
      </div>
    </section>
  )
}

export default Product
