import React from 'react'
import UserSignupForm from './UserSignupForm'
import UserLoginForm from './UserLoginForm'

import styles from '../../styles/User.module.css'
import { useAppSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/actions'
import { AuthType } from '../../models/models'

const UserForm = () => {
  const { showForm, formType } = useAppSelector((state) => state.user)

  const { toggleForm, toggleFormType } = useActions()

  const closeForm = () => toggleForm(false)
  const toggleCurrentFormType = (type: AuthType) => toggleFormType(type)

  return showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm} />
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
