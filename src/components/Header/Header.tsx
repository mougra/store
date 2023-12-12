import React, { useEffect, useState } from 'react'

import styles from '../../styles/Header.module.css'
import { ROUTES } from '../../utils/routes'
import { Link, useNavigate } from 'react-router-dom'

import LOGO from '../../images/logo.png'
import AVATAR from '../../images/avatar.jpg'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useSearchProductQuery } from '../../store/products/products.api'
import { logoutUser, toggleForm } from '../../store/user/user.slice'
import { checkUser } from '../../store/user/user.actions'
import { localStore } from '../../store/localStore'

export const Header = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { currentUser, cart } = useAppSelector((state) => state.user)

  const [user, setUser] = useState<any>({ name: 'Guest', avatar: AVATAR })
  const [searchValue, setSearchValue] = useState('')
  const { data: searchData, isLoading } = useSearchProductQuery(searchValue)

  useEffect(() => {
    if (!currentUser) return
    setUser(currentUser)
  }, [currentUser])

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true))
    else navigate(ROUTES.PROFILE)
  }

  const handleSearch = ({ target: { value } }: any) => {
    setSearchValue(value)
  }

  function lohoutHandle() {
    dispatch(logoutUser())
    setUser({ name: 'Guest', avatar: AVATAR })
    navigate(ROUTES.HOME)
  }

  useEffect(() => {
    if (localStore.get('tokensJWT')) {
      dispatch(checkUser())
    }
  }, [])

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
        {currentUser && (
          <button className={styles.more} onClick={lohoutHandle}>
            logout
          </button>
        )}
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
