import { format } from 'date-fns'
import styled from 'styled-components'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { BsCalendar4 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import Row from 'components/common/Row/Row'
import Button from 'components/common/Button'
import FormGroup from '../FormGroup'
import FormSection from '../FormSection'
import { selectCart } from 'features/booking/bookingSlice'
import FinanceSection from 'components/finance/FinanceSection'

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

function BookingForm() {
  const cart = useSelector(selectCart)
  const navigate = useNavigate()

  const handleSubmit = () => {
    console.log(cart)
  }

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

  return (
    <div>
      <FormSection title='Dịch vụ đã chọn'>
        <Row>
          {cart.selectedServices.map((service) => (
            <Button key={service.id} variant='outline'>
              {service.name}
            </Button>
          ))}
        </Row>
        <Button
          fullWidth
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 0
          }}
          onClick={() => navigate('/len-lich/chon-dich-vu')}
        >
          Xem tất cả dịch vụ
        </Button>
      </FormSection>
      <FormSection title='Thời gian'>
        <Button
          variant='outline'
          onClick={() => navigate('/len-lich/chon-ngay')}
          fullWidth
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          {cart.bookedAt && format(cart.bookedAt, 'kk:mm - dd/MM/yyyy')} <BsCalendar4 />
        </Button>
      </FormSection>
      <FormSection title='Mã giảm giá'>
        <FormGroup>
          <GroupInputButton>
            <input type='text' />
            <button className='btn btn-primary'>Áp dụng</button>
          </GroupInputButton>
        </FormGroup>
      </FormSection>
      <FormSection>
        <FinanceSection
          data={{
            subTotal: subTotal,
            discount: discount
          }}
        />
      </FormSection>
      <Button variant='primary' onClick={handleSubmit}>
        Tiếp tục
      </Button>
      <Button style={{ marginBottom: '24px' }} onClick={handleSubmit}>
        Hủy
      </Button>
    </div>
  )
}

export default BookingForm
