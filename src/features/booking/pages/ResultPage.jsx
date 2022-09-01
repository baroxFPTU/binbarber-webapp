import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion, usePresence } from 'framer-motion'
import Confetti from 'react-confetti'

import config from 'config'
import { theme } from 'styles/theme'
import Button from 'components/common/Button'
import { FailIllustra, NotFoundIllustra, SuccessIllustra } from '../components/Illustrator'

const ResultPageStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0 24px;
  height: 100%;
  background: #fff;
  overflow: hidden;
  h2 {
    font-size: 32px;
    font-weight: bold;
    color: ${(props) => props.colorscheme};
    text-align: center;
  }
  p {
    text-align: center;
    font-weight: 500;
  }
`

const GroupButton = styled.div`
  width: 100%;
  margin-top: 48px;
`

const BOOKING_STATUS = {
  success: 'success',
  failed: 'failed'
}

const pageVariants = {
  hidden: {
    opacity: 0,
    x: '-100%'
  },
  show: {
    opacity: 1,
    x: 0
  },
  leave: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.6
    }
  }
}

const ResultPage = () => {
  const location = useLocation()
  const navigate = useNavigate(location)
  const [searchParams] = useSearchParams()
  const bookingId = searchParams.get('booking')
  const bookingStatus = searchParams.get('status')
  const { title, description, Element, colorScheme } = getHeadingByStatus(bookingId, bookingStatus)
  const isSuccess = bookingId && bookingStatus === BOOKING_STATUS.success
  const buttonLabel = isSuccess ? 'Xem lịch đã đặt' : 'Trở về trang chủ'
  const buttonHref = isSuccess ? config.routes.userBooking : config.routes.home
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 600)
  }, [isPresent, safeToRemove])

  return (
    <div className='app-master'>
      <AnimatePresence exitBeforeEnter initial={true} custom={{ mode: 'wait' }}>
        <ResultPageStyled
          key={location.pathname}
          colorscheme={colorScheme}
          variants={pageVariants}
          initial='hidden'
          animate='show'
          exit='leave'
          transition={{
            type: 'spring',
            duration: 1
          }}
        >
          {isSuccess && (
            <Confetti width={window.innerWidth - 30} height={window.innerHeight} recycle={false} />
          )}
          <motion.div key={`illustration.${bookingStatus || 'notfound'}`} className='image'>
            {<Element />}
          </motion.div>
          <div style={{ marginTop: '64px' }}>
            <h2>{title}</h2>
            <p>{description}</p>
            <GroupButton>
              <Button
                variant='primary'
                style={{ backgroundColor: colorScheme }}
                onClick={() => navigate(buttonHref)}
              >
                {buttonLabel}
              </Button>
            </GroupButton>
          </div>
        </ResultPageStyled>
      </AnimatePresence>
    </div>
  )
}

const getHeadingByStatus = (bookingId, bookingStatus) => {
  if (bookingId && bookingStatus === BOOKING_STATUS.success) {
    return {
      title: 'Đặt thành công!',
      description: 'Nhớ đến sớm nhé. \nHẹn gặp người anh em!',
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
