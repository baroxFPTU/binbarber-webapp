import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import React, { useMemo, useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import config from 'config'
import { bookingUtils } from 'utils'
import { useTitle } from 'hooks/useTitle'
import { bookingActions, selectBookingAtString, selectCart } from '../bookingSlice'

import Button from 'components/common/Button'
import Divider from 'components/common/Divider'
import FinanceSection from 'components/finance/FinanceSection'
import { FormGroup, FormSection } from '../../../components/Form'
import ServiceGrid from 'features/service/components/ServiceGrid'
import useRedirectEmptyCart from 'hooks/useRedirectEmptyCart'
import FormModal from '../components/Modals/FormModal'

const GroupInputButton = styled.div`
  display: flex;
  column-gap: 12px;
  input {
    flex: 2;
    margin-bottom: 0;
  }
  button {
    flex: 1;
    padding: 12px 24px;
  }
  @media screen and (max-width: 350px) {
    flex-direction: column;
    button {
      margin-top: 12px;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const ReviewPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector(selectCart)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const bookedAt = useSelector(selectBookingAtString)

  const [watching, stopWatching] = useRedirectEmptyCart(`${config.routes.booking}/chon-dich-vu`)
  const { onUpdateTitleAndDescription, reset } = useTitle()
  const initialValues = bookingUtils.loadFromLocalStorage() || undefined

  useEffect(() => {
    onUpdateTitleAndDescription('Xem lại', 'Cùng xem lại dịch vụ bạn đã chọn nhé.')

    return () => {
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    watching()
    dispatch(bookingActions.setIsReviewing(true))

    return () => {
      stopWatching()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watching, dispatch])

  const subTotal = useMemo(() => {
    return cart.selectedServices.reduce((sum, service) => (sum += service.price), 0)
  }, [cart.selectedServices])

  const discount = useMemo(() => {
    const totalDiscountPercent = cart.appliedDiscounts.reduce(
      (sum, discount) => (sum += discount.percent),
      0
    )
    return subTotal * (totalDiscountPercent / 100)
  }, [cart.appliedDiscounts, subTotal])

  const handleSubmit = () => {
    setIsOpenModal(true)
  }

  const handleBookingConfirm = async (formValues) => {
    try {
      const { name, phone } = formValues
      const userId = bookingUtils.generateUserId(name, phone)
      dispatch(bookingActions.setUserId(userId))
      dispatch(
        bookingActions.fetchCreateBooking({
          ...cart,
          userId
        })
      )
      dispatch(bookingActions.clearCart())

      bookingUtils.saveToLocalStorage(name, phone)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCancelOnClick = () => {
    dispatch(bookingActions.clearCart())
    navigate('/')
  }

  const ReviewTimeButton = (
    <NavLink to='/len-lich/chon-ngay' style={{ textAlign: 'right' }}>
      Chọn lại
    </NavLink>
  )

  return (
    <Wrapper>
      <FormSection
        title='Dịch vụ đã chọn'
        titleRightElement={
          <Link to='/len-lich/chon-dich-vu' style={{ textAlign: 'right' }}>
            Xem lại
          </Link>
        }
      >
        <ServiceGrid data={cart.selectedServices} />
      </FormSection>
      <FormSection title='Thời gian' titleRightElement={ReviewTimeButton}>
        {bookedAt}
      </FormSection>

      <FormSection title='Mã giảm giá'>
        <FormGroup>
          <GroupInputButton>
            <input type='text' />
            <button className='btn btn-primary'>Áp dụng</button>
          </GroupInputButton>
        </FormGroup>
      </FormSection>

      <Divider style={{ margin: '40px 0' }} />
      <FormSection>
        <FinanceSection
          services={cart.selectedServices}
          data={{
            subTotal: subTotal,
            discount: discount
          }}
        />
      </FormSection>

      <div style={{ marginTop: 'auto' }}>
        <Button variant='primary' onClick={handleSubmit}>
          Lên lịch ngay
        </Button>
        <Button style={{ marginBottom: '24px' }} onClick={handleCancelOnClick}>
          Hủy
        </Button>
      </div>
      <FormModal
        defaultValues={initialValues || { name: '', phone: '' }}
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        onSubmit={handleBookingConfirm}
      ></FormModal>
    </Wrapper>
  )
}

export default ReviewPage
