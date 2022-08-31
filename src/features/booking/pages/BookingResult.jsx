import Button from 'components/common/Button'
import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { FailIllustra, NotFoundIllustra, SuccessIllustra } from '../components/Illustrator'

const BookingResultStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: calc(${(props) => props.theme.base.spacing} * 8);

  height: 100%;

  h2 {
    font-size: 32px;
    font-weight: bold;
    color: ${(props) =>
      props.isSuccess
        ? props.theme.color.green[400]
        : props.isFailed
        ? props.theme.color.red[400]
        : props.theme.color.yellow[500]};
  }
`

const BookingResult = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const bookingId = searchParams.get('booking')
  const bookingStatus = searchParams.get('status')
  const status = {
    isSuccess: false,
    isFailed: false,
    isNotFound: false
  }
  let Illustrator = NotFoundIllustra
  let headingStatus = 'Not Found'

  if (bookingId && bookingStatus === 'success') {
    status.isSuccess = true
    Illustrator = SuccessIllustra
    headingStatus = 'Lên lịch thành công'
  } else if (!bookingId && bookingStatus === 'failed') {
    status.isFailed = true
    Illustrator = FailIllustra
    headingStatus = 'Có gì đó sai sai'
  } else {
    // return navigate('/404')
  }

  return (
    <BookingResultStyled {...status}>
      <div className='image'>
        <Illustrator />
      </div>
      <h2>{headingStatus}</h2>
      <p>
        Vui lòng đến trước 5 - 7 phút để được tư vấn nhiều hơn nhé. <br /> Hẹn gặp người anh em
      </p>
      <div style={{ marginTop: 'auto', width: '100%' }}>
        <Button variant='primary'>Lịch đã đặt</Button>
        <Button style={{ marginBottom: '24px' }}>Trang chủ</Button>
      </div>
    </BookingResultStyled>
  )
}

export default BookingResult
