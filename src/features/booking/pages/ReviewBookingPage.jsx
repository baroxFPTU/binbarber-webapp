import Button from 'components/common/Button'
import Divider from 'components/common/Divider'
import FinanceSection from 'components/finance/FinanceSection/FinanceSection'
import FormGroup from 'components/Form/FormGroup/FormGroup'
import FormSection from 'components/Form/FormSection/FormSection'
import config from 'config'
import useRedirectEmptyCart from 'hooks/useRedirectEmptyCart'
import React, { useMemo } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { selectBookingAtString, selectCart } from '../bookingSlice'

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
  const [watching] = useRedirectEmptyCart(`${config.routes.booking}/chon-dich-vu`)
  const bookedAt = useSelector(selectBookingAtString)
  useEffect(() => {
    watching()
  }, [watching])

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

  return (
    <Wrapper>
      <FormSection title='Thời gian' horizontal>
        {bookedAt}
      </FormSection>
      <NavLink to='/len-lich/chon-ngay'>Chọn lại</NavLink>
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
        <Button style={{ marginBottom: '24px' }} onClick={handleSubmit}>
          Hủy
        </Button>
      </div>
    </Wrapper>
  )
}

export default ReviewBookingPage
