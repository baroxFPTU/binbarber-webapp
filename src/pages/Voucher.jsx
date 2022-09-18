import { useTitle } from 'hooks/useTitle'
import React, { useEffect } from 'react'

function Voucher() {
  const { onUpdateTitleAndDescription, reset } = useTitle()

  useEffect(() => {
    onUpdateTitleAndDescription('Vouchers', 'Mã giảm giá của tôi')

    return () => {
      reset()
    }
  }, [])

  return (
    <div>
      <h1>Voucher page</h1>
    </div>
  )
}

export default Voucher
