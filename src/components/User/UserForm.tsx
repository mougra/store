import React from 'react'
import UserSignupForm from './UserSignupForm'
import UserLoginForm from './UserLoginForm'

import styles from '../../styles/User.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { toggleForm, toggleFormType } from '../../store/user/user.slice'

const UserForm = () => {
  const dispatch = useAppDispatch()

  const { showForm, formType, loading, error } = useAppSelector(
    (state) => state.user
  )

  const closeForm = () => dispatch(toggleForm(false))
  const toggleCurrentFormType = (type: string) => dispatch(toggleFormType(type))

  return showForm ? (
    <>
      {loading && <div className={styles.loader}></div>}
      <div className={styles.overlay} onClick={closeForm} />

      {error && (
        <span className={styles.error}>Login or Password is incorrect</span>
      )}
      {formType === 'signup' ? (
        <UserSignupForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      ) : (
        <UserLoginForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      )}
    </>
  ) : (
    <></>
  )
}

export default UserForm
