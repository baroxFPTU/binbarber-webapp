import Row from 'components/common/Row/Row'
import React from 'react'
import styled from 'styled-components'
import { formatCurrency } from 'utils'

const FinanceSectionStyled = styled.div`
  font-size: clamp(16px, 2.5vw, 17px);
  margin-bottom: 32px;
  .total {
    font-size: 20px;
    margin-bottom: 18px;
  }
`

function FinanceSection({ services, data }) {
  const { subTotal, discount } = data

  return (
    <FinanceSectionStyled>
      <Row spaceBetween className='total'>
        <span>Thành tiền</span>
        <span className='bold'>{formatCurrency(subTotal - discount)}</span>
      </Row>
      {services.map((service) => (
        <Row spaceBetween key={service.id}>
          <span>{service.name}</span>
          <span className='bold'>{formatCurrency(service.price)}</span>
        </Row>
      ))}

      <Row spaceBetween>
        <span>Giảm giá</span>
        <span className='bold'>{formatCurrency(discount)}</span>
      </Row>
    </FinanceSectionStyled>
  )
}

export default FinanceSection
