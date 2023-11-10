import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from '../../styles/Profile.module.css'
import { updateUser } from '../../store/user/user.slice'
import { useAppDispatch } from '../../hooks/redux'

const Profile = () => {
  const dispatch = useAppDispatch()
  const { currentUser } = useSelector(({ user }) => user)

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  })

  useEffect(() => {
    if (!currentUser) return

    setValues(currentUser)
  }, [currentUser])

  const handleChange = ({ target: { value, name } }: any) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const isNotEmpty = Object.values(values).every((val) => val)

    if (!isNotEmpty) return

    dispatch(updateUser(values))
  }

  return (
    <section className={styles.profile}>
      {!currentUser ? (
        <span>You need to log in</span>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <input
              type='email'
              placeholder='Your email'
              name='email'
              value={values.email}
              autoComplete='off'
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.group}>
            <input
              type='name'
              placeholder='Your name'
              name='name'
              value={values.name}
              autoComplete='off'
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.group}>
            <input
              type='password'
              placeholder='Your password'
              name='password'
              value={values.password}
              autoComplete='off'
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.group}>
            <input
              type='avatar'
              placeholder='Your avatar'
              name='avatar'
              value={values.avatar}
              autoComplete='off'
              onChange={handleChange}
              required
            />
          </div>

          <button type='submit' className={styles.submit}>
            Update
          </button>
        </form>
      )}
    </section>
  )
}

export default Profile
