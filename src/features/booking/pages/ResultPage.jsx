import Button from 'components/common/Button'
import config from 'config'
import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import { FailIllustra, NotFoundIllustra, SuccessIllustra } from '../components/Illustrator'

const ResultPageStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: calc(${(props) => props.theme.base.spacing} * 8);
  height: 100%;
  h2 {
    font-size: 32px;
    font-weight: bold;
    color: ${(props) => props.colorScheme};
  }
`

const BOOKING_STATUS = {
  success: 'success',
  failed: 'failed'
}

const ResultPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const bookingId = searchParams.get('booking')
  const bookingStatus = searchParams.get('status')
  const { title, description, Element, colorScheme } = getHeadingByStatus(bookingId, bookingStatus)
  const isSuccess = bookingId && bookingStatus === BOOKING_STATUS.success
  const buttonLabel = isSuccess ? 'Xem lịch đã đặt' : 'Trở về trang chủ'
  const buttonHref = isSuccess ? config.routes.userBooking : config.routes.home

  return (
    <ResultPageStyled colorScheme={colorScheme}>
      <div className='image'>{<Element />}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div style={{ marginTop: 'auto', width: '100%', marginBottom: '64px' }}>
        <Button
          variant='primary'
          style={{ backgroundColor: colorScheme }}
          onClick={() => navigate(buttonHref)}
        >
          {buttonLabel}
        </Button>
        {isSuccess && (
          <Button style={{ marginBottom: '24px' }} onClick={() => navigate('/')}>
            Trang chủ
          </Button>
        )}
      </div>
    </ResultPageStyled>
  )
}

const getHeadingByStatus = (bookingId, bookingStatus) => {
  if (bookingId && bookingStatus === BOOKING_STATUS.success) {
    return {
      title: 'Lên lịch thành công',
      description:
        'Vui lòng đến trước 5 - 7 phút để được tư vấn nhiều hơn nhé.\nHẹn gặp người anh em!',
      Element: SuccessIllustra,
      colorScheme: theme.color.green[400]
    }
  }

  if (bookingStatus === BOOKING_STATUS.failed) {
    return {
      title: 'Hmmm! Ét ô ét',
      description: 'Tiếc quá. Đã có lỗi trong quá trình lên lịch. Quay lại sau nhé.',
      Element: FailIllustra,
      colorScheme: theme.color.red[400]
    }
  }

  return {
    title: 'Không tìm thấy',
    description: 'Trang bạn tìm hiện chưa được hỗ trợ. Quay lại sau nhé.',
    Element: NotFoundIllustra,
    colorScheme: theme.color.yellow[500]
  }
}

export default ResultPage
