import Button from 'components/common/Button'
import { NotFoundIllustra } from 'features/booking/components/Illustrator'
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <div className='image'>
        <NotFoundIllustra />
      </div>
      <Link to='/'>
        <Button variant='primary'>Trở về trang chủ</Button>
      </Link>
    </div>
  )
}

export default NotFound
