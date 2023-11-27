import React, { useState } from 'react'
import styles from '../../styles/User.module.css'
import { loginUser } from '../../store/user/user.slice'
import { useAppDispatch } from '../../hooks/redux'

const UserSignupForm = ({ toggleCurrentFormType, closeForm }: any) => {
  const dispatch = useAppDispatch()
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const handleChange = ({ target: { value, name } }: any) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const isNotEmpty = Object.values(values).every((val) => val)

    if (!isNotEmpty) return

    dispatch(loginUser(values))
    closeForm()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className='icon'>
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>

      <div className={styles.title}>Log In</div>

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
            type='password'
            placeholder='Your password'
            name='password'
            value={values.password}
            autoComplete='off'
            onChange={handleChange}
            required
          />
        </div>

        <div
          onClick={() => toggleCurrentFormType('signup')}
          className={styles.link}
        >
          Create an account
        </div>

        <button type='submit' className={styles.submit}>
          Login
        </button>
      </form>
    </div>
  )
}

export default UserSignupForm
