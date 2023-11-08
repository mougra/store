import { useState, useEffect } from 'react'
import { Size } from '../models/models'

export const SCREEN_SM = 576
// export const SCREEN_MD = 768
export const SCREEN_LG = 992
// export const SCREEN_XL = 1200

export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    // height: undefined,
    SCREEN_SM: false,
    SCREEN_LG: false,
    countsProducts: undefined,
  })
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= SCREEN_SM && window.innerWidth < SCREEN_LG) {
        setWindowSize({
          width: window.innerWidth,
          // height: window.innerHeight,
          SCREEN_SM: false,
          SCREEN_LG: true,
          countsProducts: 3,
        })
      } else if (window.innerWidth >= SCREEN_LG) {
        setWindowSize({
          width: window.innerWidth,
          // height: window.innerHeight,
          SCREEN_SM: false,
          SCREEN_LG: false,
          countsProducts: 5,
        })
      } else {
        setWindowSize({
          width: window.innerWidth,
          // height: window.innerHeight,
          SCREEN_SM: true,
          SCREEN_LG: false,
          countsProducts: 2,
        })
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}
