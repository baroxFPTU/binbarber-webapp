import { selectIsSelectedService } from 'features/booking/bookingSlice'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function useRedirectEmptyCart(fallbackUrl) {
  const [isWatching, setIsWatching] = useState(true)
  const navigate = useNavigate()
  const isSelectedService = useSelector(selectIsSelectedService)

  useEffect(() => {
    if (!isSelectedService && isWatching && fallbackUrl) {
      navigate(fallbackUrl)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWatching, fallbackUrl])

  const watching = () => {
    setIsWatching(true)
  }

  const stopWatching = () => {
    setIsWatching(false)
  }

  return [watching, stopWatching]
}

export default useRedirectEmptyCart
