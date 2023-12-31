import React, { ChangeEvent, FormEvent, useState } from 'react'

import styles from '../../styles/User.module.css'
import { useAppDispatch } from '../../hooks/redux'
import { createUser } from '../../store/user/user.actions'
import { AuthType, RegisterUser } from '../../models/models'

interface UserSignupFormProps {
  toggleCurrentFormType(type: AuthType): void
  closeForm(): void
}

const UserSignupForm = ({
  toggleCurrentFormType,
  closeForm,
}: UserSignupFormProps) => {
  const dispatch = useAppDispatch()
  const [values, setValues] = useState<RegisterUser>({
    name: '',
    email: '',
    password: '',
    avatar: '',
  })

  const handleChange = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!values.name || !values.email || !values.password) return

    dispatch(createUser(values))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className='icon'>
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>

      <div className={styles.title}>Sign Up</div>

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
            placeholder='Your avatar url (optional)'
            name='avatar'
            value={values.avatar}
            autoComplete='off'
            onChange={handleChange}
            // required
          />
        </div>

        <div
          className={styles.link}
          onClick={() => toggleCurrentFormType('login')}
        >
          I already have an account
        </div>

        <button type='submit' className={styles.submit}>
          Create an account
        </button>
      </form>
    </div>
  )
}

export default UserSignupForm
