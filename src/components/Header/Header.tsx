import React, { useEffect, useState } from 'react'

import styles from '../../styles/Header.module.css'
import { ROUTES } from '../../utils/routes'
import { Link, useNavigate } from 'react-router-dom'

import LOGO from '../../images/logo.svg'
import AVATAR from '../../images/avatar.jpg'
import { useAppSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/actions'
import { useSearchProductQuery } from '../../store/products/products.api'

export const Header = () => {
  const navigate = useNavigate()

  const { currentUser, cart } = useAppSelector((state) => state.user)

  const [user, setUser] = useState<any>({ name: 'Guest', avatar: AVATAR })
  const [searchValue, setSearchValue] = useState('')
  const { data: searchData, isLoading } = useSearchProductQuery(searchValue)

  useEffect(() => {
    if (!currentUser) return
    setUser(currentUser)
  }, [currentUser])

  const { toggleForm } = useActions()

  const handleClick = () => {
    if (!currentUser) toggleForm(true)
    else navigate('/profile')
  }

  const handleSearch = ({ target: { value } }: any) => {
    setSearchValue(value)
  }

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt='logo' />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${user.avatar})` }}
          />
          <div className={styles.username}>{user.name}</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type='search'
              name='search'
              placeholder='Search for anything...'
              autoComplete='off'
              onChange={handleSearch}
              value={searchValue}
            />
          </div>

          {searchValue && (
            <div className={styles.box}>
              {isLoading
                ? 'Loading'
                : !searchData
                ? 'No results'
                : searchData.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        onClick={() => setSearchValue('')}
                        className={styles.item}
                        to={`/products/${id}`}
                      >
                        <div
                          className={styles.image}
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className={styles.title}>{title}</div>
                      </Link>
                    )
                  })}
            </div>
          )}
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favorites}>
            <svg className='icon-fav'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className='icon-cart'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            {cart.length && <span className={styles.count}>{cart.length}</span>}
          </Link>
        </div>
      </div>
    </div>
  )
}
