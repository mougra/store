import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { productsActions } from '../store/products/products.slice'
import { userActions } from '../store/user/user.slice'

const actions = {
  ...productsActions,
  ...userActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
