import FinanceSection from 'components/finance/FinanceSection/FinanceSection'
import React, { useMemo, useRef, useState } from 'react'
import { BsChevronRight, BsCalendar4 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import FormGroup from '../FormGroup/FormGroup'
import FormSection from '../FormSection/FormSection'

const SelectionButton = styled.button`
    border: 1px solid #DBDBDB;
    border-radius: 6px;
    margin: 0;
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 16px;
    transition: all 0.25s ease-in-out;

    &:hover {
      border: 1px solid #FAC172;
      box-shadow: 0 0 0 1px #FAC172;
      padding-right: 12px;
    }
`

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

const instance = {
  name: '',
  phone: '',
  selectedServices: [
    {
      id: 1,
      label: 'Cắt tóc',
      description: 'Đảm bảo bảnh trai như Sơn Tùng',
      price: 30000,
      createdAt: Date.now()
    },
    {
      id: 2,
      label: 'Gội đầu',
      description: 'Mát mẻ từ da dẻ',
      price: 20000,
      createdAt: Date.now()
    },
    {
      id: 4, label: 'Cạo râu',
      description: 'Cạo sạch từng cen-ti-met',
      price: 15000,
      createdAt: Date.now()
    }
  ],
  appliedDiscounts: [
    {
      id: 1,
      code: 'ABC',
      percent: 20
    }
  ],
  bookedAt: Date.now()
}

function BookingForm() {
  const navigate = useNavigate()
  const [bookingInstance, setBookingInstance] = useState({
    ...instance,
    name: '',
    phone: ''
  })

  /**
    Tam tinh: loop through selectedServices -> sum.
    Giam gia => loop through appliedDiscount -> sum,
    Thanh tien => tam tinh - giam gia
  */

  const updateName = (e) => {
    setBookingInstance({ ...bookingInstance, name: e.target.value })
  }

  const updatePhone = (e) => {
    setBookingInstance({ ...bookingInstance, phone: e.target.value })
  }

  const handleSubmit = () => {
    console.log(bookingInstance)
  }

  const subTotal = useMemo(() => {
    return bookingInstance.selectedServices.reduce((sum, service) => sum+=service.price, 0)
  }, [bookingInstance.selectedServices])

  const discount = useMemo(() => {
    const totalDiscountPercent = bookingInstance.appliedDiscounts.reduce((sum, discount) => sum+=discount.percent, 0)
    return subTotal * (totalDiscountPercent / 100)
  }, [ bookingInstance.appliedDiscounts, subTotal ])

  return (
    <div>
      <FormSection title="Thông tin cơ bản">
        <FormGroup>
          <label>Họ và tên</label>
          <input type="text" value={bookingInstance.name} onChange={updateName}/>
        </FormGroup>
        <FormGroup>
          <label>Số điện thoại</label>
          <input type="text" value={bookingInstance.phone} onChange={updatePhone}/>
        </FormGroup>
      </FormSection>
      <FormSection title="Chọn dịch vụ">
        <SelectionButton className="btn" onClick={() => navigate('./chon-dich-vu')}>Xem tất cả dịch vụ <BsChevronRight/></SelectionButton>
      </FormSection>
      <FormSection title="Thời gian">
        <SelectionButton className="btn" onClick={() => navigate('./chon-ngay')}>8:00 - 24/06/2022 <BsCalendar4/></SelectionButton>
      </FormSection>
      <FormSection title="Mã giảm giá">
        <FormGroup>
          <GroupInputButton>
            <input type="text"/>
            <button className="btn btn-primary">Áp dụng</button>
          </GroupInputButton>
        </FormGroup>
      </FormSection>
      <FormSection >
        <FinanceSection data={{
          subTotal: subTotal,
          discount: discount
        }}/>
      </FormSection>
      <button className="btn btn-primary" style={{ marginBottom: '24px' }} onClick={handleSubmit}>Tiếp tục</button>
    </div>
  )
}

export default BookingForm