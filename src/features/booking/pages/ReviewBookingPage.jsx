import Button from 'components/common/Button'
import Divider from 'components/common/Divider'
import FinanceSection from 'components/finance/FinanceSection/FinanceSection'
import FormGroup from 'components/Form/FormGroup/FormGroup'
import FormSection from 'components/Form/FormSection/FormSection'
import config from 'config'
import ServiceGrid from 'features/service/components/ServiceGrid'
import useRedirectEmptyCart from 'hooks/useRedirectEmptyCart'
import { useTitle } from 'hooks/useTitle'
import React, { useMemo } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { bookingActions, selectBookingAtString, selectCart } from '../bookingSlice'

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

const ReviewBookingPage = () => {
  const cart = useSelector(selectCart)
  const navigate = useNavigate()
  const [watching] = useRedirectEmptyCart(`${config.routes.booking}/chon-dich-vu`)
  const dispatch = useDispatch()
  const bookedAt = useSelector(selectBookingAtString)
  const { onChangeBoth, reset } = useTitle()

  useEffect(() => {
    onChangeBoth('Xem lại', 'Cùng xem lại dịch vụ bạn đã chọn nhé.')

    return () => {
      reset()
    }
  }, [])

  useEffect(() => {
    watching()
    dispatch(bookingActions.setIsReviewing(true))
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
    console.log(cart)
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
    </Wrapper>
  )
}

export default ReviewBookingPage
